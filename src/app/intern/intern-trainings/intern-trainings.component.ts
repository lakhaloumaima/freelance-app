import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InternService } from 'src/app/services/intern.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-intern-trainings',
  templateUrl: './intern-trainings.component.html',
  styleUrls: ['./intern-trainings.component.css']
})
export class InternTrainingsComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;
  addTraining! :  FormGroup;
  update!: FormGroup;
  dataTrain = {
    id: '',
    diplome: '',
    description: '',
    niveau_etude:'',
    date_debut: new Date(),
    date_fin: new Date(),
    ecole: ''
  }
  userdata:any;
  minDate!: string;
  todayDate=new Date();
  p:number = 1 ;
  constructor(private intservice:InternService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.minDate = this.formatDate(this.todayDate);

console.log(this.userdata)
    this.addTraining = new FormGroup({
      diplome: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date_debut: new FormControl('', [Validators.required]),
      date_fin: new FormControl('', [Validators.required]),
      ecole: new FormControl('', [Validators.required]),

    });
    this.update = new FormGroup({
      diplome: new FormControl(''),
      description: new FormControl(''),
      date_debut: new FormControl(''),
      date_fin: new FormControl(''),
      ecole: new FormControl('')
    });
   }
   formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
   ngOnInit(): void {
    this.intservice.gettrainings(this.userdata.id).subscribe(data => {
      this.dataArray = data
      console.log(this.dataArray)
      this.counter = this.dataArray.length
      console.log(this.counter), (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any training in our database"
      }
    })
  }

  getdata(diplome: string, description: string,date_debut: Date,date_fin: Date,ecole: string,id: any) {
    this.dataTrain.diplome = diplome
    this.dataTrain.description = description
    this.dataTrain.date_debut = date_debut
    this.dataTrain.date_fin = date_fin
    this.dataTrain.ecole = ecole
    this.dataTrain.id = id
    console.log(this.dataTrain)
  }

  addnewTraining(f: any) {
    const formData = new FormData();
    formData.append('diplome', this.addTraining.value.diplome);
    formData.append('description', this.addTraining.value.description);
    formData.append('date_debut', this.addTraining.value.date_debut);
    formData.append('date_fin', this.addTraining.value.date_fin);
    formData.append('ecole', this.addTraining.value.ecole);

    formData.append('user_id', this.userdata.id);

    let data = f.value
    this.intservice.createnewtraining(formData).subscribe(() => {
      this.toastr.success('Training Succeffuly added!', 'Trainings!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }

  updateTraining(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('diplome', this.update.value.diplome);
    formData.append('description', this.update.value.description);
    formData.append('date_debut', this.update.value.date_debut);
    formData.append('date_fin', this.update.value.date_fin);
    formData.append('ecole', this.update.value.ecole);

    this.intservice.updatetraining(this.dataTrain.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataTrain.id)
      this.dataArray[indexId].diplome = data.diplome
      this.dataArray[indexId].description = data.description
      this.dataArray[indexId].date_debut = data.date_debut
      this.dataArray[indexId].date_fin = data.date_fin
      this.toastr.success('Training Succeffuly Updated!', 'Trainings!');

      setTimeout(() => {
        window.location.reload();
      }, 900);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteTraining(id: any): void {
    this.intservice.deletetraining(id).subscribe(
      () => {
        this.toastr.error('Training Succeffuly Deleted!', 'Trainings!');
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
