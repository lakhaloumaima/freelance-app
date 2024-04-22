import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-domains',
  templateUrl: './all-domains.component.html',
  styleUrls: ['./all-domains.component.css']
})
export class AllDomainsComponent implements OnInit {
  counter:any
  dataArray:any = []
  messageErr="" ;
  adddomain! :  FormGroup;
  update!: FormGroup;
  dataDom = {
    id: '',
    domain_name: ''
  }
  p:number = 1 ;


  constructor(private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {

    this.adddomain = new FormGroup({
      domain_name: new FormControl('', [Validators.required])
    });
    this.update = new FormGroup({
      domain_name: new FormControl(''),
    });
   }
   ngOnInit(): void {
    this.sprservice.getalldomains().subscribe(data => {
      this.dataArray = data
      console.log(this.dataArray)
      this.counter = this.dataArray.length
      console.log(this.counter), (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any domain in our database"
      }
    })
  }

  getdata(domain_name: string, id: any) {
    this.dataDom.domain_name = domain_name
    this.dataDom.id = id
  }


  addnewDomain(f: any) {
    const formData = new FormData();
    formData.append('domain_name', this.adddomain.value.domain_name);
    let data = f.value
    this.sprservice.createnewdomain(formData).subscribe(() => {
      this.toastr.success('Domain Succeffuly added!', 'Domains!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
      this.route.navigate(['/all-domains'])
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }
  updatedomain(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('domain_name', this.update.value.domain_name);
    this.sprservice.updateDomain(this.dataDom.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataDom.id)
      this.dataArray[indexId].domain_name = data.domain_name
      this.toastr.success('Domain Succeffuly Updated!', 'Domains!');

      setTimeout(() => {
        window.location.reload();
      }, 900);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }
  deleteDomain(id: any): void {
    this.sprservice.deleteDomain(id).subscribe(
      () => {
        this.toastr.error('Domain Succeffuly Deleted!', 'Domains!');
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
