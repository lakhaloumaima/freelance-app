import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-freelance-offre-inprogress',
  templateUrl: './freelance-offre-inprogress.component.html',
  styleUrls: ['./freelance-offre-inprogress.component.css']
})
export class FreelanceOffreInprogressComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;


  addEnded! :  FormGroup;
  update!: FormGroup;
  dataProgress = {
    id: '',
    is_completed:false,
    filepath:''
  }
  userdata:any;
  p:number = 1 ;



  constructor(private frservice:FreelancerService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

    this.addEnded = new FormGroup({
      is_completed: new FormControl('', [Validators.required]),
      filepath: new FormControl('', [Validators.required]),


    });
    this.update = new FormGroup({
      is_completed: new FormControl(''),
      filepath: new FormControl('')

    });
   }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.frservice.getallactivefreelanceoffers(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any Inprogress Freelance offre in our database";
    }
  }




  getdata(is_completed: boolean,filepath: string, id: any) {
    this.dataProgress.is_completed = is_completed
    this.dataProgress.filepath = filepath
    this.dataProgress.id = id
  }


  updateProgress(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('is_completed', this.update.value.is_completed);
    formData.append('filepath', this.update.value.filepath);



    this.frservice.updateProgress(this.dataProgress.id, formData).subscribe(response => {

      this.toastr.success('Experience Succeffuly Updated!', 'EXperiences!');

      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }
  navigateToInterview(receiver_id: string, candidature_id: string, offre_id: string , is_completed: boolean): void {
    if (this.dataProgress.is_completed === false) {
      this.route.navigate(['/interview-admin', receiver_id, candidature_id, offre_id]);
    } else {
      Swal.fire('Error!', 'You missed the interview date or it has not started yet', 'error');
    }
  }

  deleteActiveFreelanceOffer(id:any){
    this.frservice.deleteActiveFreelanceOffer(id).subscribe(
      () => {
        this.toastr.success('Freelance Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );

  }

}