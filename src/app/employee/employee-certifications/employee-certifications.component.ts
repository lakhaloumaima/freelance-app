import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee-certifications',
  templateUrl: './employee-certifications.component.html',
  styleUrls: ['./employee-certifications.component.css']
})
export class EmployeeCertificationsComponent {
  counter:any
  p:number = 1 ;
  dataArray:any = []
  messageErr="" ;
  addCertification! :  FormGroup;
  update!: FormGroup;
  dataCertif = {
    id: '',
    certification_name: '',
    etablissement: '',
    date_certif: new Date()
  }
  userdata:any;


  constructor(private empservice:EmployeeService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
console.log(this.userdata)
    this.addCertification = new FormGroup({
      certification_name: new FormControl('', [Validators.required]),
      etablissement: new FormControl('', [Validators.required]),
      date_certif: new FormControl('', [Validators.required])
    });
    this.update = new FormGroup({
      certification_name: new FormControl(''),
      etablissement: new FormControl(''),
      date_certif: new FormControl('')
    });
   }
   ngOnInit(): void {
    this.empservice.getcertifications(this.userdata.id).subscribe(data => {
      this.dataArray = data
      console.log(this.dataArray)
      this.counter = this.dataArray.length
      console.log(this.counter), (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any certification in our database"
      }
    })
  }

  getdata(certification_name: string, etablissement: string,date_certif: Date, id: any) {
    this.dataCertif.certification_name = certification_name
    this.dataCertif.etablissement = etablissement
    this.dataCertif.date_certif = date_certif
    this.dataCertif.id = id
    console.log(this.dataCertif)
  }

  addnewCertification(f: any) {
    const formData = new FormData();
    formData.append('certification_name', this.addCertification.value.certification_name);
    formData.append('etablissement', this.addCertification.value.etablissement);
    formData.append('date_certif', this.addCertification.value.date_certif);
    formData.append('user_id', this.userdata.id);

    let data = f.value
    this.empservice.createnewcertification(formData).subscribe(() => {
      this.toastr.success('Certification Succeffuly added!', 'Certifications!');
      setTimeout(() => {
        window.location.reload()
      }, 100);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }

  updateCertifications(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('certification_name', this.update.value.certification_name);
    formData.append('etablissement', this.update.value.etablissement);
    formData.append('date_certif', this.update.value.date_certif);
    this.empservice.updateCertification(this.dataCertif.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataCertif.id)
      this.dataArray[indexId].certification_name = data.certification_name
      this.dataArray[indexId].etablissement = data.etablissement
      this.dataArray[indexId].date_certif = data.date_certif
      this.toastr.success('Certification Succeffuly Updated!', 'Certifications!');

      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteCertification(id: any): void {
    this.empservice.deletecertification(id).subscribe(
      () => {
        this.toastr.error('Certification Succeffuly Deleted!', 'Certifications!');
        setTimeout(() => {
          window.location.reload()
        }, 100);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );
  }
}
