import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InternService } from 'src/app/services/intern.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-intern-candidatures',
  templateUrl: './intern-candidatures.component.html',
  styleUrls: ['./intern-candidatures.component.css']
})
export class InternCandidaturesComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;
  userdata: any;
  p:number = 1 ;
  preventAbuse = false;
  constructor(private intserv:InternService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;


  }

  ngOnInit(): void {
    this.preventAbuse = true;
    this.intserv.getinterncandidature(this.userdata.id).subscribe(data => {
      this.dataArray = data
      console.log(this.dataArray)
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
      this.counter = this.dataArray.length
      console.log(this.counter), (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any candidature in our database"
      }
    })
  }


  navigateToInterview(receiver_id: string, candidature_id: string, offre_id: string, formattedDate: string): void {
    const interviewDate = moment(formattedDate, 'MMMM DD, YYYY [at] HH:mm').toDate();
    const currentDate = new Date();
    const interviewYear = interviewDate.getFullYear();
    const interviewMonth = interviewDate.getMonth();
    const interviewDay = interviewDate.getDate();
    const interviewHours = interviewDate.getHours();
    const interviewMinutes = interviewDate.getMinutes();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
  
    if (
      currentYear === interviewYear &&
      currentMonth === interviewMonth &&
      currentDay === interviewDay &&
      currentHours === interviewHours &&
      Math.abs(currentMinutes - interviewMinutes) <= 10
    ) {
      this.route.navigate(['/interview-user', receiver_id, candidature_id, offre_id]);
    } else {
      Swal.fire('Error!', 'You missed the interview date or it has not started yet', 'error');
    }
  }
  deleteCandIntern(id:any){
    this.intserv.deleteCandInternship(id).subscribe(
      () => {
        this.toastr.success('Candidature was Succeffuly Deleted!', 'Candidature!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );

  }

    alert(){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Interview Is Not Scheduled For Today!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      console.log("clicked")
    }
}
