import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuperadminService } from 'src/app/services/superadmin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-condidats',
  templateUrl: './all-condidats.component.html',
  styleUrls: ['./all-condidats.component.css']
})
export class AllCondidatsComponent {
  counter:any
  dataArray:any = []
  messageErr="" ;
  p:number=1;
constructor(private sprservice:SuperadminService, private  usersrv: UserService,private route:Router, private toastr: ToastrService) {
}
async ngOnInit(): Promise<void> {
  try {
    const data = await this.sprservice.getallcandidates().toPromise();
    this.dataArray=data
    console.log(this.dataArray)
    this.counter = this.dataArray.length;
  } catch(error) {
    this.messageErr = "We don't found any user in our database";
  }
}
}
