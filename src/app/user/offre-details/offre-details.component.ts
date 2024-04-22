import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent {
  dataArray:any = [];
  messageErr ='';
  count: any;
  constructor(private activatedRoute: ActivatedRoute, private usersService:UserService , private route : Router ) {

   }
  ngOnInit(): void {
    this.usersService.offrehomedata(this.activatedRoute.snapshot.params['id']).subscribe(data=>{

      console.log(data)
      this.dataArray = data ,
       (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })

}
}