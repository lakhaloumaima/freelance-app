import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offre-freelance-details',
  templateUrl: './offre-freelance-details.component.html',
  styleUrls: ['./offre-freelance-details.component.css']
})
export class OffreFreelanceDetailsComponent {
  dataArray:any = [];
  messageErr ='';
  count: any;
  userdata:any
  currentuser:any;
  preventAbuse = false;
  todayDate=new Date();
  constructor(private activatedRoute: ActivatedRoute, private usersService:UserService , private route : Router,private frservice: FreelancerService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.currentuser = JSON.parse( sessionStorage.getItem('userdata') !) ;

   }
  ngOnInit(): void {
    this.preventAbuse = true;
    this.usersService.offrehomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArray = data ,
    setTimeout(() => {
    this.preventAbuse = false;
  }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })

}
addrequest(id: any) {
  if (this.userdata) {
    const formData = new FormData();
    formData.append('offre_id', id);
    formData.append('user_id', this.userdata.id);
    formData.append('date_postulation',this.todayDate.toISOString());

    this.frservice.addcandidature(formData).subscribe(() => {
      this.route.navigate(['/freelancer-condidatures'])

      console.log(formData)
      Swal.fire('Saved!', '', 'success')
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You cant Add Candidature on the same Offre twice '
      })
      this.route.navigate(['/freelancer-condidatures'])

    });
  }
  else {
    Swal.fire('you must logged_in !', '', 'error')
    this.route.navigate(['/login'])
  }
}


addfavoris(id: any ) {

  if (this.userdata) {
    const formData = new FormData();
    formData.append('offre_id', id);
    formData.append('user_id', this.userdata.id);
    this.frservice.addFavoris(formData).subscribe(() => {
      this.route.navigate(['/freelancer-favorite-list'])

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Add To Favorite Succefully  ',
        showConfirmButton: false,
        timer: 1500
      })


    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You cant twice ',
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500
      })
      this.route.navigate(['/freelancer-favorite-list'])

    });
  }
  else {
    Swal.fire('you must logged_in !', '', 'error')
    this.route.navigate(['/login'])
  }
}

verifiedtest(verified:boolean){

  if(verified == true){
    Swal.fire('Offre not Verified !', '', 'error')
  }else{
    Swal.fire('item Verified!', '', 'success')
  }
}
}