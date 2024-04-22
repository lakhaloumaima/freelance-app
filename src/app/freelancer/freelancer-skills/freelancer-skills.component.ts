import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { SuperadminService } from 'src/app/services/superadmin.service';
@Component({
  selector: 'app-freelancer-skills',
  templateUrl: './freelancer-skills.component.html',
  styleUrls: ['./freelancer-skills.component.css']
})
export class FreelancerSkillsComponent {

  counter:any
  dataArray:any = []
  dataArray2:any = []
  messageErr="" ;
  addSkill! :  FormGroup;
  update!: FormGroup;
  dataSkill= {
    id: '',
    niveau: ''
  }
  userdata:any;
  p:number = 1 ;


  constructor(private frservice:FreelancerService,private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.addSkill = new FormGroup({
      niveau: new FormControl('', [Validators.required]),
      souscategorie_id: new FormControl('', [Validators.required]),


    });
    this.update = new FormGroup({
      niveau: new FormControl(''),
    });
   }



   ngOnInit(): void {
    this.sprservice.getallsubcategories().subscribe(response=>
      {
        this.dataArray2 =response;
        this.counter = this.dataArray2.length;
      },(err:HttpErrorResponse)=>{
      })
      this.frservice.getskills(this.userdata.id).subscribe(response=>
      {
        this.dataArray=response
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      },(err:HttpErrorResponse)=>{
      })
  }


  getdata(niveau: string, id: any) {
    this.dataSkill.niveau = niveau
    this.dataSkill.id = id
    console.log(this.dataSkill)
  }




  addnewSkill(f: any) {
    const formData = new FormData();

    formData.append('souscategorie_id', this.addSkill.value.souscategorie_id);
    formData.append('user_id', this.userdata.id);
    formData.append('niveau', this.addSkill.value.niveau)
    debugger
    let data = f.value
    this.frservice.createnewskill(formData).subscribe(() => {
      this.toastr.success('Skill Succeffuly added!', 'Skills!');
      setTimeout(() => {
        window.location.reload()
      }, 100);
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    });
  }

  updateSkills(f: any) {
    let data = f.value
    const formData = new FormData();
    formData.append('niveau', this.update.value.niveau);

    this.frservice.updateSkill(this.dataSkill.id, formData).subscribe(response => {
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataSkill.id)
      this.dataArray[indexId].niveau = data.niveau

      this.toastr.success('Skill Succeffuly Updated!', 'Skills!');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })

  }

  deleteSkill(id: any): void {
    this.frservice.deleteskill(id).subscribe(
      () => {
        this.toastr.error('Skill Succeffuly Deleted!', 'Skills!');
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