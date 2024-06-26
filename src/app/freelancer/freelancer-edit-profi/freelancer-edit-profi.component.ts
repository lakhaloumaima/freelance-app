import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-freelancer-edit-profi',
  templateUrl: './freelancer-edit-profi.component.html',
  styleUrls: ['./freelancer-edit-profi.component.css']
})
export class FreelancerEditProfiComponent {

  messageErr:any;
  userdata:any;
  image: any;
  newdata:any = []
  upadate!: any;
  imageupdate!: any;
  messageSuccess: any;
  constructor(private route:Router, private sprservice:SuperadminService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.imageupdate = new FormGroup({ avatar: new FormControl('', [Validators.required]), });
    this.upadate = new FormGroup({
     // photo: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
      society_description: new FormControl('', [Validators.required])
    });

  }

  getdata(email:string , adress :string, id:any){
    this.messageSuccess=''
    this.userdata.id = id
    this.userdata.email = email
     this.userdata.adress = adress

  }

  fileChange(event:any) {
    this.image =event.target.files[0];
  }
  updateimage(f:any){
    let data=f.value
    const imageformadata = new FormData();
    imageformadata.append('avatar', this.image );
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.sprservice.updateimageuser(this.userdata.id,imageformadata).subscribe(response=>
          {
            this.newdata =response;
            sessionStorage.removeItem('userdata');
            sessionStorage.setItem( 'userdata', JSON.stringify( this.newdata ) );
            debugger
            window.location.reload();

          },(err:HttpErrorResponse)=>{

          })
    //   this.route.navigate(['/dashbord-freelancer']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }
  updatenewuser (f:any){
    let data=f.value
    const formData = new FormData();
   // formData.append('avatar', this.image );
    formData.append('firstname', this.upadate.value.firstname);
    formData.append('lastname', this.upadate.value.lastname);
    formData.append('email', this.upadate.value.email);
    formData.append('adress', this.upadate.value.adress);
    formData.append('password', this.upadate.value.password);
    formData.append('password_confirmation', this.upadate.value.password_confirmation);
    formData.append('society_description', this.upadate.value.society_description);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
    this.sprservice.updateProfileUser(this.userdata.id,formData).subscribe(response=>
      {

        sessionStorage.setItem( 'userdata', JSON.stringify( response ) );
        window.location.reload();
        let indexId=this.userdata.findIndex((obj:any)=>obj.id==this.userdata.id)

        this.userdata[indexId].email=data.email
        this.userdata[indexId].firstname=data.firstname
        this.userdata[indexId].lastname=data.lastname
        this.userdata[indexId].adress=data.adress
        this.userdata[indexId].password=data.password
        this.userdata[indexId].password_confirmation=data.password_confirmation
        this.userdata[indexId].society_description=data.society_description

        this.messageSuccess=`this email : ${this.userdata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
      })
     this.route.navigate(['/edit-freelance']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  ngOnInit(): void {

  }

}