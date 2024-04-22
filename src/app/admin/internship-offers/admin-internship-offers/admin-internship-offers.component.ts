import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-internship-offers',
  templateUrl: './admin-internship-offers.component.html',
  styleUrls: ['./admin-internship-offers.component.css']
})
export class AdminInternshipOffersComponent {
  p:number = 1 ;
  counter:any
  dataArray:any = []
  dataArray2:any = []
  messageErr="" ;

  update!: FormGroup;
  dataIntern = {
    id: '',
    titre_offre: '',
    description: '',
    niveau_etude: '',
    start_date: '',
    end_date: '',
    is_payed:'',
    salaire: '',
    duration:'',
    location: ''
  }
  userdata: any;

  constructor(private adservice:AdminService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

    this.update = new FormGroup({
      titre_offre: new FormControl(''),
      description: new FormControl(''),
      niveau_etude: new FormControl(''),
      start_date: new FormControl(''),
      end_date: new FormControl(''),
      is_payed: new FormControl(''),
      salaire: new FormControl(''),
      duration: new FormControl(''),
      location: new FormControl('')

    });
  }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.adservice.getallintership(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any internship offre in our database";
    }
  }
  getdata(titre_offre: string,description: string,niveau_etude: string,start_date: string,end_date: string,is_payed: string,salaire: string,duration: string,location: string, id: any) {
    this.dataIntern.titre_offre = titre_offre
    this.dataIntern.description = description
    this.dataIntern.niveau_etude = niveau_etude
    this.dataIntern.start_date = start_date
    this.dataIntern.end_date = end_date
    this.dataIntern.is_payed = is_payed
    this.dataIntern.salaire = salaire
    this.dataIntern.duration = duration
    this.dataIntern.location = location
    this.dataIntern.id = id


  }


  deleteinternshipoffre(id:any){
    this.adservice.deleteinternshipoffre(id).subscribe(
      () => {
        this.toastr.success('Internship Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );

  }
  updateInternship(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('titre_offre', this.update.value.titre_offre);
    formData.append('description', this.update.value.description);
    formData.append('niveau_etude', this.update.value.niveau_etude);
    formData.append('start_date', this.update.value.start_date);
    formData.append('end_date', this.update.value.end_date);
    formData.append('is_payed', this.update.value.is_payed);
    formData.append('salaire', this.update.value.salaire);
    formData.append('duration', this.update.value.duration);
    formData.append('location', this.update.value.location);


    this.adservice.updateInternship(this.dataIntern.id,formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataIntern.id)
      this.dataArray[indexId].titre_offre = data.titre_offre
      this.dataArray[indexId].description = data.description
      this.dataArray[indexId].niveau_etude = data.niveau_etude
      this.dataArray[indexId].start_date = data.start_date
      this.dataArray[indexId].end_date = data.end_date
      this.dataArray[indexId].is_payed = data.is_payed
      this.dataArray[indexId].salaire = data.salaire
      this.dataArray[indexId].duration = data.duration
      this.dataArray[indexId].location = data.location
      this.toastr.success('Offer Succeffuly Updated!', 'offer!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }


}

