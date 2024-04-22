import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  docDefinition: any;
  url: any
  userdata: any;
  dataArray: any;
  dataArray1: any;
  messageErr: any;
  chartDatasets: any = [];
  chartReady = false;

  constructor(private usersService: UserService, private router: Router) {
    this.userdata = JSON.parse(sessionStorage.getItem('userdata')!);
  }

  ngOnInit(): void {
    this.usersService.count_all_Admin(this.userdata.id).subscribe(data => {


      this.dataArray = data, (err: HttpErrorResponse) => {
        this.messageErr = "We dont't found this user in our database"
      }
    })


  }
  seDeconnecter(){
    this.router.navigateByUrl('/connexion');
  }
}






