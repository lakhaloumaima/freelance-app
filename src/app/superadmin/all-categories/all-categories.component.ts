import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  counter:any
  counter1:any
  dataArray:any = []
  dataArray2:any = []
  dataArray10:any = []
  messageErr="" ;
  addcategory! :  FormGroup;
  update! : FormGroup;
  is_updated: boolean = false;
  dataCateg = {
    id: '',
    categorie_name: ''  }

  p:number = 1 ;


  constructor(private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {

    this.addcategory = new FormGroup({
      categorie_name: new FormControl('', [Validators.required]),
      domain_id: new FormControl('', [Validators.required])
    });
    this.update = new FormGroup({
      categorie_name: new FormControl(''),

    });
   }
  async ngOnInit(): Promise<void> {
    try {
      const data = await this.sprservice.getalldomains().toPromise();
      this.dataArray2=data
      console.log(this.dataArray2)
      this.counter = this.dataArray2.length;
    } catch(error) {
      this.messageErr = "We don't found any domain in our database";
    }
    try {
      const data = await this.sprservice.getallcategories().toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter1 = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any domain in our database";
    }
  }

  getdata(categorie_name: string, id: any) {
    this.dataCateg.categorie_name = categorie_name
    this.dataCateg.id = id
    console.log(this.dataCateg)
  }

  addnewCategory (f:any){
    const formData = new FormData();
    formData.append('domain_id', this.addcategory.value.domain_id);
    formData.append('categorie_name', this.addcategory.value.categorie_name);

    let data=f.value

    this.sprservice.createnewcategory(formData).subscribe( ()=>{
      this.toastr.success('Category Succeffuly added!', 'Category!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
      this.route.navigate(['/all-categories'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error

    }) ;
  }

  updatecategory(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('categorie_name', this.update.value.categorie_name);
    this.sprservice.updateCategory(this.dataCateg.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataCateg.id)
      this.dataArray[indexId].categorie_name = data.categorie_name
      this.toastr.success('Category Succeffuly Updated!', 'Category!');
      setTimeout(() => {
        window.location.reload()
      }, 10);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteCategory(id: any): void {
    this.sprservice.deleteCategory(id).subscribe(
      () => {
        this.toastr.error('Category Succeffuly Deleted!', 'Category!');
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
