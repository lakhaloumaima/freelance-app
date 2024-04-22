import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-job-offers',
  templateUrl: './admin-job-offers.component.html',
  styleUrls: ['./admin-job-offers.component.css']
})
export class AdminJobOffersComponent implements OnInit {
  counter:any
  p:number = 1 ;
  dataArray:any = []
  messageErr="" ;
  userdata:any;
  update!: FormGroup;
  dataJob = {
    id: '',
    titre_offre: '',
    description: '',
    niveau_etude: '',
    type_contrat: '',
    start_date: '',
    salaire: '',
    location: '',
    experience :''
  }

  constructor(private adservice:AdminService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

    this.update = new FormGroup({
      titre_offre: new FormControl(''),
      description: new FormControl(''),
      niveau_etude: new FormControl(''),
      type_contrat: new FormControl(''),
      start_date: new FormControl(''),
      salaire: new FormControl(''),
      location: new FormControl(''),
      experience: new FormControl(''),

    });
   }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.adservice.getalljobs(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any job offre in our database";
    }
  }

  getdata(titre_offre: string,description: string,niveau_etude: string,type_contrat: string,start_date: string,salaire: string,location: string, experience:string, id: any) {
    this.dataJob.titre_offre = titre_offre
    this.dataJob.description = description
    this.dataJob.niveau_etude = niveau_etude
    this.dataJob.type_contrat = type_contrat
    this.dataJob.start_date = start_date
    this.dataJob.salaire = salaire
    this.dataJob.location = location
    this.dataJob.experience =experience
    this.dataJob.id = id


  }

  deleteJob(id:any){
    this.adservice.deleteJob(id).subscribe(
      () => {
        this.toastr.success('Job Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );

  }


  updateJob(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('titre_offre', this.update.value.titre_offre);
    formData.append('description', this.update.value.description);
    formData.append('niveau_etude', this.update.value.niveau_etude);
    formData.append('type_contrat', this.update.value.type_contrat);
    formData.append('start_date', this.update.value.start_date);
    formData.append('salaire', this.update.value.salaire);
    formData.append('location', this.update.value.location);
    formData.append('experience', this.update.value.experience);

    this.adservice.updateJob(this.dataJob.id,formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataJob.id)
      this.dataArray[indexId].titre_offre = data.titre_offre
      this.dataArray[indexId].description = data.description
      this.dataArray[indexId].niveau_etude = data.niveau_etude
      this.dataArray[indexId].type_contrat = data.type_contrat
      this.dataArray[indexId].start_date = data.start_date
      this.dataArray[indexId].salaire = data.salaire
      this.dataArray[indexId].location = data.location
      this.dataArray[indexId].experience = data.experience

       this.toastr.success('Offer Succeffuly Updated!', 'offer!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

}
