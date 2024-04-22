import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { SuperadminService } from 'src/app/services/superadmin.service';

@Component({
  selector: 'app-admin-add-internship-offer',
  templateUrl: './admin-add-internship-offer.component.html',
  styleUrls: ['./admin-add-internship-offer.component.css']
})
export class AdminAddInternshipOfferComponent {
  messageErr="" ;
  addinternship! :  FormGroup;
  showOfferPrice: boolean = false;
  dropdownList: Array<{ item_id: string, item_text: string }> = [];
  userdata:any;
  selectedItems = [];
  dropdownSettings = {};
  dataArray: any = []
  dataArray2: any = []
  dataArray3: any = []
  counter: any

  constructor(private sprservice: SuperadminService,private adservice:AdminService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
    };
    this.addinternship = new FormGroup({
      titre_offre: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      niveau_etude: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      is_payed: new FormControl('', [Validators.required]),
      salaire: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      souscategorie_id: new FormControl('', [Validators.required]),
      domain_id: new FormControl('', [Validators.required]),
      categorie_id: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),
      type_offre: new FormControl('Stage', [Validators.required]),
    });
  }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.sprservice.getalldomains().toPromise();
      this.dataArray = data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
    } catch (error) {
      this.messageErr = "We don't found any domain in our database";
    }
  }
  onPaidChange(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (target.value === 'true') {
      this.showOfferPrice = true;
    } else {
      this.showOfferPrice = false;
    }
  }
  addnewInternship (f:any){
    const formData = new FormData();
    formData.append('titre_offre', this.addinternship.value.titre_offre);
    formData.append('description', this.addinternship.value.description);
    formData.append('niveau_etude', this.addinternship.value.niveau_etude);
    formData.append('start_date', this.addinternship.value.start_date);
    formData.append('end_date', this.addinternship.value.end_date);
    formData.append('is_payed', this.addinternship.value.is_payed);
    formData.append('salaire', this.addinternship.value.salaire);
    formData.append('location', this.addinternship.value.location);
    formData.append('type_offre', this.addinternship.value.type_offre);
    formData.append('user_id', this.userdata.id);
    formData.append('souscategorie_id',this.addinternship.value.souscategorie_id.map((item: any) => item.item_id));

    let data=f.value

    this.adservice.addnewInternship(formData).subscribe( ()=>{
      this.toastr.success('Internship Offer Succeffuly added!', 'Internship Offer!');
      setTimeout(() => {
        window.location.reload()
      }, 100);
      this.route.navigate(['/admin-internship-offers'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error

    }) ;
  }
  getcategorybydomain(id: any): void {
    this.sprservice.getcategorybydomain(id).subscribe(data => {
      this.dataArray2 = data
      console.log(this.dataArray2)
      this.counter = this.dataArray2.length, (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any category in our database"
      }
    })
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  getsubcategorybycategory(id: any): void {
    this.sprservice.getsubcategorybycategory(id).subscribe(data => {
      this.dataArray3 = data
      for (let i = 0; i < this.dataArray3.length; i++) {
        this.dropdownList.push({ item_id: this.dataArray3[i].id, item_text: this.dataArray3[i].sous_categorie_name });
      }
      console.log(this.dropdownList)
      this.counter = this.dataArray3.length, (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any sub category in our database"
      }
    })
  }
}
