import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-intern-profile-to-others',
  templateUrl: './intern-profile-to-others.component.html',
  styleUrls: ['./intern-profile-to-others.component.css']
})
export class InternProfileToOthersComponent {
  preventAbuse = false;
  formationdata:any = [];
  userdatadata:any = [];
  currentuser:any = [];

  certificationdata:any = [];
  languedata:any = [];
  experiencedata:any = [];
  competencedata:any = [];

  arrayData:any[] = []
  colorsBootstrap = ["success", "info", "warning", "danger","primary","secondary","dark","light",]

  messageErr ='';
  count: any;
  constructor(private activatedRoute: ActivatedRoute, private usersService:UserService , private route : Router ) {

   }
  ngOnInit(): void {
    this.preventAbuse = true;
    this.currentuser = JSON.parse( sessionStorage.getItem('userdata') !) ;
    this.usersService.get_user_Data(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log('userdatadata',data)
      this.userdatadata = data ,
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })

    this.usersService.get_user_Formation(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log('formationdata',data)
      this.formationdata = data ,
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })
    this.usersService.get_user_certification(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log('certificationdata',data)
      this.certificationdata = data ,
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })
    this.usersService.get_user_experience(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log('experiencedata',data)
            this.experiencedata = data ,
            setTimeout(() => {
              this.preventAbuse = false;
            }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })
    this.usersService.get_user_langue(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log('languedata',data)
      this.languedata = data ,
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })
    this.usersService.get_user_competence(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      let i = 0;

      while(i < data.length) {
        this.arrayData.push({ "id": data[i].id,
        "sous_categorie_name": data[i].souscategorie.sous_categorie_name,
        "niveau": data[i].niveau,
        "color": this.colorsBootstrap[i] });
        i++

      }
      this.competencedata = this.arrayData
      ,
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })

}
}
