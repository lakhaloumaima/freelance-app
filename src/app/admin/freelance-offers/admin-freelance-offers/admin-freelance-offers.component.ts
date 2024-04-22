import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-freelance-offers',
  templateUrl: './admin-freelance-offers.component.html',
  styleUrls: ['./admin-freelance-offers.component.css']
})
export class AdminFreelanceOffersComponent {
  counter:any
  p:number = 1 ;
  dataArray:any = []
  messageErr="" ;
  userdata:any;
  update!: FormGroup;
  dataFreelance = {
    id: '',
    titre_offre: '',
    description: '',
    niveau_etude: '',
    start_date: '',
    end_date: '',
    salaire: '',
    location: ''

  }

  constructor(private adservice:AdminService,private route:Router, private toastr: ToastrService) {

    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

    this.update = new FormGroup({
      titre_offre: new FormControl(''),
      description: new FormControl(''),
      niveau_etude: new FormControl(''),
      start_date: new FormControl(''),
      end_date: new FormControl(''),
      salaire: new FormControl(''),
      location: new FormControl('')


    });
   }
  async ngOnInit(): Promise<void> {

    try {
      const data = await this.adservice.getallfreelance(this.userdata.id).toPromise();
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length;
     } catch(error) {
      this.messageErr = "We don't found any Freelance offre in our database";
    }
  }

  getdata(titre_offre: string,description: string,niveau_etude: string,start_date: string,end_date: string,salaire: string,is_completed: string,location: string, id: any) {
    this.dataFreelance.titre_offre = titre_offre
    this.dataFreelance.description = description
    this.dataFreelance.niveau_etude = niveau_etude
    this.dataFreelance.start_date = start_date
    this.dataFreelance.end_date = end_date
    this.dataFreelance.salaire = salaire
    this.dataFreelance.location = location
    this.dataFreelance.id = id


  }

  deleteFreelance(id:any){
    this.adservice.deleteFreelance(id).subscribe(
      () => {
        this.toastr.success('Freelance Offer was Succeffuly Deleted!', 'User!');
        setTimeout(() => {
          window.location.reload()
        }, 500);

      },
      (err: HttpErrorResponse) => {
        Swal.fire('Error!', err.message, 'error');
      }
    );

  }



  updateFreelance(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('titre_offre', this.update.value.titre_offre);
    formData.append('description', this.update.value.description);
    formData.append('niveau_etude', this.update.value.niveau_etude);
    formData.append('start_date', this.update.value.start_date);
    formData.append('end_date', this.update.value.end_date);
    formData.append('salaire', this.update.value.salaire);
    formData.append('location', this.update.value.location);


    this.adservice.updateJob(this.dataFreelance.id,formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataFreelance.id)
      this.dataArray[indexId].titre_offre = data.titre_offre
      this.dataArray[indexId].description = data.description
      this.dataArray[indexId].niveau_etude = data.niveau_etude
      this.dataArray[indexId].start_date = data.start_date
      this.dataArray[indexId].end_date = data.end_date
      this.dataArray[indexId].salaire = data.salaire
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


