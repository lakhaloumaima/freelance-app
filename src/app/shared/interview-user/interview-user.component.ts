import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
declare var apiRTC: any;
@Component({
  selector: 'app-interview-user',
  templateUrl: './interview-user.component.html',
  styleUrls: ['./interview-user.component.css']
})
export class InterviewUserComponent implements OnInit {
  @ViewChild("messagesContainer") messagesContainer!: ElementRef;
  messages: any[] = [];
  guid: string = "";
  currentuser:any;
  messageErr = '' ;
  dataArray: any;
  dataArrayy : any;
  addmessage: any ;
  ordered_msges:any
  ord:any[] = []
  elem:any
  receiver:any;
  test:any
  current_user:any
  conversationFormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required])
  });
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute,private fb: FormBuilder, private cdr: ChangeDetectorRef, private toastr: ToastrService, private usersService: UserService) {
    this.currentuser = JSON.parse( sessionStorage.getItem('userdata') !);

    this.addmessage = new FormGroup({
      text: new FormControl('', [Validators.required]),

    });
  }


  ngOnInit(): void {
    const ws = new WebSocket("ws://localhost:3000/cable");
    ws.onopen = () => {
      console.log("Connected to websocket server");
      this.guid = Math.random().toString(36).substring(2, 15);

      ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            id: this.guid,
            channel: "MessagesChannel"
          })
        })
      );
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "ping") return;
      if (data.type === "welcome") return;
      if (data.type === "confirm_subscription") return;

      const message = data.message;
      this.setMessagesAndScrollDown([...this.messages, message]);
    };
    const candidature_id = this.activatedRoute.snapshot.params['candidature_id'];
    this.fetchMessages(candidature_id);
  }
  async handleSubmit(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const body = target['message'].value;
    target['message'].value = "";
    const receiver_id = this.activatedRoute.snapshot.params['receiver_id'];
    const candidature_id = this.activatedRoute.snapshot.params['candidature_id']

    const sender_id = this.currentuser.id
    await this.http.post("http://localhost:3000/messages", { body, receiver_id, candidature_id, sender_id}).toPromise();
    await this.fetchMessages(candidature_id);
    this.cdr.detectChanges();
  }

  async fetchMessages(candidature_id: any) {
    const url = `http://localhost:3000/messages?candidature_id=${candidature_id}`;
    const data = await this.http.get<any[]>(url).toPromise();
    const receiver_id = this.activatedRoute.snapshot.params['receiver_id'];

    this.usersService.get_user_Data(receiver_id).subscribe(data=>{
      this.receiver = data
      console.log(this.receiver),
       (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this user in our database"}

    })
    debugger
    if (data) {
      console.log(this.receiver)
      this.setMessagesAndScrollDown(data);
    }
  }
  setMessagesAndScrollDown(data: any[]) {
    this.messages = data;
    this.resetScroll();
    this.cdr.detectChanges();
  }

  resetScroll() {
    if (!this.messagesContainer) return;
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }















  
 get conversationNameFc(): FormControl {
    return this.conversationFormGroup.get('name') as FormControl;
  }

  getOrcreateConversation() {
    var localStream: null = null;
    //==============================
    // 1/ CREATE USER AGENT
    //==============================
    var ua = new apiRTC.UserAgent({
      uri: 'apzkey:myDemoApiKey'
    });
    //==============================
    // 2/ REGISTER
    //==============================
    ua.register().then((session:any) => {

      //==============================
      // 3/ CREATE CONVERSATION
      //==============================
      const conversation = session.getConversation(this.conversationNameFc.value);
      //==========================================================
      // 4/ ADD EVENT LISTENER : WHEN NEW STREAM IS AVAILABLE IN CONVERSATION
      //==========================================================
      conversation.on('streamListChanged', (streamInfo: any) => {
        console.log("streamListChanged :", streamInfo);
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation.subscribeToMedia(streamInfo.streamId)
              .then((stream:any) => {
                console.log('subscribeToMedia success');
              }).catch((err:any) => {
                console.error('subscribeToMedia error', err);
              });
          }
        }
      });
      //=====================================================
      // 4 BIS/ ADD EVENT LISTENER : WHEN STREAM IS ADDED/REMOVED TO/FROM THE CONVERSATION
      //=====================================================
      conversation.on('streamAdded', (stream: any) => {
        stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
      }).on('streamRemoved', (stream: any) => {
        stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId);
      });

      //==============================
      // 5/ CREATE LOCAL STREAM
      //==============================
      ua.createStream({
        constraints: {
          audio: true,
          video: true
        }
      })
        .then((stream: any) => {

          console.log('createStream :', stream);

          // Save local stream
          localStream = stream;
          stream.removeFromDiv('local-container', 'local-media');
          stream.addInDiv('local-container', 'local-media', {}, true);

          //==============================
          // 6/ JOIN CONVERSATION
          //==============================
          conversation.join()
            .then((response: any) => {
              //==============================
              // 7/ PUBLISH LOCAL STREAM
              //==============================
              conversation.publish(localStream);
            }).catch((err:any) => {
              console.error('Conversation join error', err);
            });

        }).catch((err:any) => {
          console.error('create stream error', err);
        });
    });
  }


  @ViewChild('backDropModal') backDropModal!: ElementRef;
  @ViewChild('closeModalButton') closeModalButton!: ElementRef;
  
  ngAfterViewInit() {
    this.closeModalButton.nativeElement.addEventListener('click', () => {
      this.backDropModal.nativeElement.style.display = 'none';
    });
  
    // To show the modal
    this.backDropModal.nativeElement.style.display = 'block';
  }



  success(){
    this.toastr.success('Canal Created Succefully!', 'Interview Started!');

  }

  getMessageSender(message: any): any {
    return message.sender_id === this.currentuser.id ? this.currentuser : this.receiver;
  }
}
