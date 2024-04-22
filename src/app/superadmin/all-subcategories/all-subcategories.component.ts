import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-all-subcategories',
  templateUrl: './all-subcategories.component.html',
  styleUrls: ['./all-subcategories.component.css']
})
export class AllSubcategoriesComponent {
  counter:any
  dataArray:any = []
  dataArray2:any = []
  dataArray3:any = []
  messageErr="" ;
  addsubcategory! :  FormGroup;
  update! : FormGroup;
  is_updated: boolean = false;
  dataSubcateg = {
    id: '',
    sous_categorie_name: ''  }

  p:number = 1 ;

  constructor(private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {

    this.addsubcategory = new FormGroup({
      sous_categorie_name: new FormControl('', [Validators.required]),
      domain_id: new FormControl('', [Validators.required]),
      categorie_id: new FormControl('', [Validators.required]),

    });
    this.update = new FormGroup({
      sous_categorie_name: new FormControl(''),

    });
   }
  async ngOnInit(): Promise<void> {
    try {
      const data = await this.sprservice.getalldomains().toPromise();
        this.dataArray=data
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
       } catch (error) {
        this.messageErr = "We don't found any domain in our database";
      }

    try {
    const data = await this.sprservice.getallsubcategories().toPromise();
      this.dataArray3=data
      console.log(this.dataArray3)
      this.counter = this.dataArray3.length;
    } catch (error) {
      this.messageErr = "We don't found any category in our database";
    }
  }

  getdata(sous_categorie_name: string, id: any) {
    this.dataSubcateg.sous_categorie_name = sous_categorie_name
    this.dataSubcateg.id = id
    console.log(this.dataSubcateg)
  }


  addnewSubcategory (f:any){
    const formData = new FormData();
    formData.append('categorie_id', this.addsubcategory.value.categorie_id);
    formData.append('sous_categorie_name', this.addsubcategory.value.sous_categorie_name);
    let data=f.value
    this.sprservice.createnewsubcategory(formData).subscribe( ()=>{
      this.toastr.success('Subcategory Succeffuly Aded!', 'Subcategory!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
      this.route.navigate(['/all-subcategories'])
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error

    }) ;
  }

  updatesubcategory(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('sous_categorie_name', this.update.value.sous_categorie_name);
    this.sprservice.updateSubcategory(this.dataSubcateg.id, formData).subscribe(response => {
      let indexId = this.dataArray3.findIndex((obj: any) => obj.id == this.dataSubcateg.id)
      this.dataArray3[indexId].sous_categorie_name = data.sous_categorie_name
      this.toastr.success('Subcategory Succeffuly Updated!', 'Subcategory!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteSubcategory(id: any): void {
    this.sprservice.deleteSubcategory(id).subscribe(
      () => {
        this.toastr.error('Subcategory Succeffuly Deleted!', 'Subcategory!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );
  }

     getcategorybydomain(id: any): void {
    this.sprservice.getcategorybydomain(id).subscribe(data=>{
      this.dataArray2=data
      console.log(this.dataArray2)
      this.counter = this.dataArray2.length, (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found any category in our database"}
    })
  }
}
