
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-freelance-ended-offers',
  templateUrl: './admin-freelance-ended-offers.component.html',
  styleUrls: ['./admin-freelance-ended-offers.component.css']
})
export class AdminFreelanceEndedOffersComponent {

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
      const data = await this.adservice.getallendedfreelanceoffers(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any Ended Freelance offre in our database";
    }
  }


  deleteEndedFreelanceOffer(id:any){
    this.adservice.deleteEndedFreelanceOffer(id).subscribe(
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