
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{


  counter:any
  dataArray:any = []
  dataArray2:any = []
  dataArray3:any = []
  dataArray5:any = []
  dataArray10:any = []
  messageErr="" ;
  p:number =1;
  x:number =1;


  constructor(private sprservice:SuperadminService,private route:Router, private toastr: ToastrService) {

  }

    async ngOnInit(): Promise<void> {
      try {
        const data = await this.sprservice.static_home().toPromise();
        this.dataArray10 = data;
        console.log(this.dataArray10);
        this.counter = this.dataArray10.length;
      } catch (error) {
        this.messageErr = "We don't found any user in our database";
      }



      try {
        const data = await this.sprservice.getalldomains().toPromise();
        this.dataArray=data
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      } catch(error) {
        this.messageErr = "We don't found any domain in our database";
      }
      try {
        const data = await this.sprservice.getallcategories().toPromise();
        this.dataArray5=data
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      } catch(error) {
        this.messageErr = "We don't found any domain in our database";
      }
      try {
        const data = await this.sprservice.getalloffres().toPromise();
        this.dataArray2=data
        console.log(this.dataArray2)
        this.counter = this.dataArray2.length;
       } catch(error) {
        this.messageErr = "We don't found any offer in our database";
      }
      try {
        const data = await this.sprservice.getallCompanies().toPromise();
        this.dataArray3=data
        console.log(this.dataArray3)
        this.counter = this.dataArray3.length;
       } catch(error) {
        this.messageErr = "We don't found any Company in our database";
      }
      try {
        const data = await this.sprservice.getallcandidates().toPromise();
        this.dataArray=data
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      } catch(error) {
        this.messageErr = "We don't found any candidate in our database";
      }
    }

    

}


