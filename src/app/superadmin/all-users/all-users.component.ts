import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})

export class AllUsersComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;
  p:number = 1 ;


  constructor(private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {
   }
   async ngOnInit(): Promise<void> {
    try {
      const data = await this.sprservice.getallusers().toPromise();
      this.dataArray = data;
      console.log(this.dataArray);
      this.counter = this.dataArray.length;
    } catch (error) {
      this.messageErr = "We don't found any user in our database";
    }
  }


  deleteUser(id:any){
    this.sprservice.deleteUser(id).subscribe(
      () => {
        this.toastr.error('User Succeffuly Deleted!', 'User!');
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
