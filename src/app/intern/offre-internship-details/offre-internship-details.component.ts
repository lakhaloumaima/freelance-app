import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternService } from 'src/app/services/intern.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offre-internship-details',
  templateUrl: './offre-internship-details.component.html',
  styleUrls: ['./offre-internship-details.component.css']
})
export class OffreInternshipDetailsComponent {
  @ViewChild('verifiedBadge', { static: false }) verifiedBadge!: ElementRef;
  dataArray:any = [];
  messageErr ='';
  count: any;
  dataArray2: any;
  userdata:any
  currentuser:any
  sous_categories: any;
  counter:any
  todayDate=new Date();
  preventAbuse = false;
  constructor(private activatedRoute: ActivatedRoute, private usersService:UserService , private route : Router,private intservice: InternService) {
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
    this.intservice.addcandidature(formData).subscribe(() => {
      this.route.navigate(['/intern-candidatures'])

      console.log(formData)
      Swal.fire('Saved!', '', 'success')
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You cant Add Candidature on the same Offre twice '
      })
      this.route.navigate(['/intern-candidatures'])

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
    // let data=f.value
   // console.log(formData)
    this.intservice.addFavoris(formData).subscribe(() => {
      this.route.navigate(['/intern-favorit-list'])

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Add To Favorite Succefully  ',
        showConfirmButton: false,
        timer: 1500
      })
      // window.location.reload();


    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You cant twice ',
        showConfirmButton: false,
        timer: 1500
      })
      this.route.navigate(['/intern-favorit-list'])

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