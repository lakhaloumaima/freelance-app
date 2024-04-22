import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InternService } from 'src/app/services/intern.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-intern-experiences',
  templateUrl: './intern-experiences.component.html',
  styleUrls: ['./intern-experiences.component.css']
})
export class InternExperiencesComponent {
  p:number = 1 ;
  counter:any
  dataArray:any = []
  messageErr="" ;
  addExperience! :  FormGroup;
  update!: FormGroup;
  dataExperience = {
    id: '',
    entreprise: '',
    position_held: '',
    start_date: new Date(),
    end_date: new Date()
  }
  userdata:any;
  minDate!: string;
  todayDate=new Date();
  constructor(private intservice:InternService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.minDate = this.formatDate(this.todayDate);

console.log(this.userdata)
    this.addExperience = new FormGroup({
      entreprise: new FormControl('', [Validators.required]),
      position_held: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      ecole: new FormControl('', [Validators.required])
    });
    this.update = new FormGroup({
      entreprise: new FormControl(''),
      position_held: new FormControl(''),
      start_date: new FormControl(''),
      end_date: new FormControl(''),
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
    this.intservice.getexperiences(this.userdata.id).subscribe(data => {
      this.dataArray = data
      console.log(this.dataArray)
      this.counter = this.dataArray.length
      console.log(this.counter), (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found any Experience in our database"
      }
    })
  }

  getdata(entreprise: string, position_held: string,start_date: Date,end_date: Date,id: any) {
    this.dataExperience.entreprise = entreprise
    this.dataExperience.position_held = position_held
    this.dataExperience.start_date = start_date
    this.dataExperience.end_date = end_date
    this.dataExperience.id = id
    console.log(this.dataExperience)
  }

  addnewExperience(f: any) {
    const formData = new FormData();
    formData.append('entreprise', this.addExperience.value.entreprise);
    formData.append('position_held', this.addExperience.value.position_held);
    formData.append('start_date', this.addExperience.value.start_date);
    formData.append('end_date', this.addExperience.value.end_date);
    formData.append('user_id', this.userdata.id);

    let data = f.value
    this.intservice.createnewexperience(formData).subscribe(() => {
      this.toastr.success('Experience Succeffuly added!', 'Experiences!');
      setTimeout(() => {
        window.location.reload()
      }, 500);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }

  updateExperience(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('entreprise', this.update.value.entreprise);
    formData.append('position_held', this.update.value.position_held);
    formData.append('start_date', this.update.value.start_date);
    formData.append('end_date', this.update.value.end_date);
    this.intservice.updateexperience(this.dataExperience.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataExperience.id)
      this.dataArray[indexId].entreprise = data.entreprise
      this.dataArray[indexId].position_held = data.position_held
      this.dataArray[indexId].start_date = data.start_date
      this.dataArray[indexId].end_date = data.end_date
      this.toastr.success('Experience Succeffuly Updated!', 'Experiences!');

      setTimeout(() => {
        window.location.reload();
      }, 900);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteExperience(id: any): void {
    this.intservice.deleteexperience(id).subscribe(
      () => {
        this.toastr.error('Experience Succeffuly Deleted!', 'Experiences!');
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
