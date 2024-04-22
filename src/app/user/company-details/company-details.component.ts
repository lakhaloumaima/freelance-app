import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {
  preventAbuse = false;
  currentuser:any = [];
  messageErr ='';
  userdatadata:any = [];
  constructor(private activatedRoute: ActivatedRoute, private usersService:UserService , private route : Router ) {

  }
  ngOnInit(): void {
    this.currentuser = JSON.parse( sessionStorage.getItem('userdata') !) ;

    this.usersService.get_user_Data(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      this.preventAbuse = true;
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
  }
}
