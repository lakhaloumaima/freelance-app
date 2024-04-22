import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-freelance-offre-ended',
  templateUrl: './freelance-offre-ended.component.html',
  styleUrls: ['./freelance-offre-ended.component.css']
})
export class FreelanceOffreEndedComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;
  userdata:any;
  p:number = 1 ;


  constructor(private frservice:FreelancerService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;


   }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.frservice.getallendedfreelanceoffers(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any Ended Freelance offre in our database";
    }
  }
  deleteEndedFreelanceOffer(id:any){
    this.frservice.deleteEndedFreelanceOffer(id).subscribe(
      () => {
        this.toastr.success('Freelance Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', 'you cant delete an active offre', 'error');
      }
    );

  }
  navigate(){
    var result = this.dataArray.map(function(a:any) {return a.offre.filepath;});

    window.open(result);
  }

}
