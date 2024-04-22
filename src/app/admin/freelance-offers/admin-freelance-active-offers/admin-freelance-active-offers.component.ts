
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-freelance-active-offers',
  templateUrl: './admin-freelance-active-offers.component.html',
  styleUrls: ['./admin-freelance-active-offers.component.css']
})
export class AdminFreelanceActiveOffersComponent {
  p:number = 1 ;
  counter:any
  dataArray:any = []
  messageErr="" ;
  userdata:any;

  dataLive = {
    is_completed: false
  }

  constructor(private adservice:AdminService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;


   }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.adservice.getallactivefreelanceoffers(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any Active Freelance offre in our database";
    }
  }
  getdata(is_completed:boolean) {
    this.dataLive.is_completed = is_completed

  }
  navigateToInterview(receiver_id: string, candidature_id: string, offre_id: string , is_completed: boolean): void {
    if (this.dataLive.is_completed === false) {
      this.route.navigate(['/interview-admin', receiver_id, candidature_id, offre_id]);
    } else {
      Swal.fire('Error!', 'You missed the interview date or it has not started yet', 'error');
    }
  }
  deleteActiveFreelanceOffer(id:any){
    this.adservice.deleteActiveFreelanceOffer(id).subscribe(
      () => {
        this.toastr.success('Freelance Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('you cant delete an active offre!', 'if you are sure go change the Condidature Status', 'error');
      }
    );

  }


}