import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-languages',
  templateUrl: './all-languages.component.html',
  styleUrls: ['./all-languages.component.css']
})
export class AllLanguagesComponent {
  counter: any
  dataArray: any = []
  messageErr = "";
  addlanguage!: FormGroup;
  update!: FormGroup;
  is_updated: boolean = false;
  dataLang = {
    id: '',
    langue_name: ''
  }
  p:number = 1 ;


  constructor(private sprservice: SuperadminService, private route: Router, private toastr: ToastrService) {
    this.update = new FormGroup({
      langue_name: new FormControl(''),
    });

    this.addlanguage = new FormGroup({
      langue_name: new FormControl('', [Validators.required])
    });
  }
  async ngOnInit(): Promise<void> {
    try {
      const data = await this.sprservice.getalllanguages().toPromise();
      this.dataArray = data;
      console.log(this.dataArray);
      this.counter = this.dataArray.length;
    } catch (error) {
      this.messageErr = "We don't found any language in our database";
    }
  }

  getdata(langue_name: string, id: any) {
    this.dataLang.langue_name = langue_name
    this.dataLang.id = id
  }


  deleteLanguage(id: any) {
    this.sprservice.deleteLanguage(id).subscribe(
      () => {
        this.toastr.error('Language Succeffuly Deleted!', 'Language!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );

  }

  addnewLanguage(f: any) {
    const formData = new FormData();
    formData.append('langue_name', this.addlanguage.value.langue_name);
    let data = f.value

    this.sprservice.createnewlanguage(formData).subscribe(() => {
      this.toastr.success('Language Succeffuly Added!', 'Language!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
      this.route.navigate(['/all-languages'])

    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error

    });
  }
  updatelanguage(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('langue_name', this.update.value.langue_name);
    this.sprservice.updateLanguage(this.dataLang.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataLang.id)
      this.dataArray[indexId].langue_name = data.langue_name
      this.toastr.success('Language Succeffuly Updated!', 'Language!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }
}


