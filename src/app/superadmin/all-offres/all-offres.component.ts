import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all-offres',
  templateUrl: './all-offres.component.html',
  styleUrls: ['./all-offres.component.css']
})
export class AllOffresComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;
  p:number = 1 ;

  constructor(private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {

  }
  async ngOnInit(): Promise<void> {
    try {
      const data = await this.sprservice.getalloffres().toPromise();
      this.dataArray = data;
      console.log(this.dataArray);
      this.counter = this.dataArray.length;
    } catch (error) {
      this.messageErr = "We don't found any offre in our database";
    }
  }
  deleteOffre(id:any){
    this.sprservice.deleteOffre(id).subscribe(
      () => {
        this.toastr.success('Offre Succeffuly Deleted!', 'Offre!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', 'you can delete an active offre', 'error');
      }
    );

  }
}
