import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-internship-active-offers',
  templateUrl: './admin-internship-active-offers.component.html',
  styleUrls: ['./admin-internship-active-offers.component.css']
})


export class AdminInternshipActiveOffersComponent  {
  counter:any
  dataArray:any = []
  messageErr="" ;
  userdata:any;
  p:number = 1 ;


  constructor(private adservice:AdminService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;


   }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.adservice.getallactiveinternshipoffers(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any Active Internship offre in our database";
    }
  }


  deleteActiveInternshipOffer(id:any){
    this.adservice.deleteActiveIntershipOffer(id).subscribe(
      () => {
        this.toastr.success('Job Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', 'you cant delete an active offer', 'error');      }
    );

  }


}