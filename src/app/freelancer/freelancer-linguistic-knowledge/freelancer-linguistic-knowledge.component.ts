

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { SuperadminService } from 'src/app/services/superadmin.service';
@Component({
  selector: 'app-freelancer-linguistic-knowledge',
  templateUrl: './freelancer-linguistic-knowledge.component.html',
  styleUrls: ['./freelancer-linguistic-knowledge.component.css']
})
export class FreelancerLinguisticKnowledgeComponent {

  counter:any
  dataArray:any = []
  dataArray2:any = []
  messageErr="" ;
  addLanguage! :  FormGroup;
  update!: FormGroup;
  dataLang = {
    id: '',
    niveau: ''
  }
  userdata:any;
  p:number = 1 ;


  constructor(private frservice:FreelancerService,private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.addLanguage = new FormGroup({
      niveau: new FormControl('', [Validators.required]),
      langue_id: new FormControl('', [Validators.required]),


    });
    this.update = new FormGroup({
      niveau: new FormControl(''),
    });
   }



   ngOnInit(): void {
    this.sprservice.getalllanguages().subscribe(response=>
      {
        this.dataArray2 =response;
        this.counter = this.dataArray2.length;
      },(err:HttpErrorResponse)=>{
      })
      this.frservice.getlanguages(this.userdata.id).subscribe(response=>
      {
        this.dataArray=response
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      },(err:HttpErrorResponse)=>{
      })
  }


  getdata(niveau: string, id: any) {
    this.dataLang.niveau = niveau
    this.dataLang.id = id
    console.log(this.dataLang)
  }




  addnewLanguage(f: any) {
    const formData = new FormData();

    formData.append('langue_id', this.addLanguage.value.langue_id);
    formData.append('user_id', this.userdata.id);
    formData.append('niveau', this.addLanguage.value.niveau)
    debugger
    let data = f.value
    this.frservice.createnewlanguage(formData).subscribe(() => {
      this.toastr.success('Language Succeffuly added!', 'Languages!');
      setTimeout(() => {
        window.location.reload()
      }, 100);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }

  updateLanguages(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('niveau', this.update.value.niveau);

    this.frservice.updateLanguage(this.dataLang.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataLang.id)
      this.dataArray[indexId].niveau = data.niveau

      this.toastr.success('Language Succeffuly Updated!', 'Trainings!');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteLanguage(id: any): void {
    this.frservice.deletelanguage(id).subscribe(
      () => {
        this.toastr.error('Language Succeffuly Deleted!', 'Languages!');
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