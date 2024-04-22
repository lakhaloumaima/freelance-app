import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee-training',
  templateUrl: './employee-training.component.html',
  styleUrls: ['./employee-training.component.css']
})
export class EmployeeTrainingComponent {

  counter:any
  dataArray:any = []
  messageErr="" ;
  addTraining! :  FormGroup;
  update!: FormGroup;
  dataTrain = {
    id: '',
    diplome: '',
    description: '',
    date_debut: new Date(),
    date_fin: new Date(),
    ecole: ''
  }
  userdata:any;
  p:number = 1 ;


  constructor(private empservice:EmployeeService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
console.log(this.userdata)
    this.addTraining = new FormGroup({
      diplome: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      date_debut: new FormControl('', [Validators.required]),
      date_fin: new FormControl('', [Validators.required]),
      ecole: new FormControl('', [Validators.required])
    });
    this.update = new FormGroup({
      diplome: new FormControl(''),
      description: new FormControl(''),
      date_debut: new FormControl(''),
      date_fin: new FormControl(''),
      ecole: new FormControl(''),

    });
   }
   ngOnInit(): void {
    this.empservice.gettrainings(this.userdata.id).subscribe(data => {
      this.dataArray = data
      console.log(this.dataArray)
      this.counter = this.dataArray.length
      console.log(this.counter), (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any trainings in our database"
      }
    })
  }

  getdata(diplome: string, description: string,date_debut: Date,date_fin: Date, ecole: string, id: any) {
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
    this.empservice.createnewtraining(formData).subscribe(() => {
      this.toastr.success('Training Succeffuly added!', 'Trainings!');
      setTimeout(() => {
        window.location.reload()
      }, 100);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }

  updateTrainings(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('diplome', this.update.value.diplome);
    formData.append('description', this.update.value.description);
    formData.append('date_debut', this.update.value.date_debut);
    formData.append('date_fin', this.update.value.date_fin);
    formData.append('ecole', this.update.value.ecole);

    this.empservice.updateTraining(this.dataTrain.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataTrain.id)
      this.dataArray[indexId].diplome = data.diplome
      this.dataArray[indexId].description = data.description
      this.dataArray[indexId].date_debut = data.date_debut
      this.dataArray[indexId].date_fin = data.date_fin
      this.dataArray[indexId].ecole = data.ecole

      this.toastr.success('Training Succeffuly Updated!', 'Trainings!');

      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteTraining(id: any): void {
    this.empservice.deletetraining(id).subscribe(
      () => {
        this.toastr.error('Training Succeffuly Deleted!', 'Trainings!');
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
