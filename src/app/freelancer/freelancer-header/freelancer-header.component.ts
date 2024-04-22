import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-freelancer-header',
  templateUrl: './freelancer-header.component.html',
  styleUrls: ['./freelancer-header.component.css']
})
export class FreelancerHeaderComponent {
  userdata:any;
  showSidebar = false;

  constructor(private route: Router , private auth: AuthService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
  logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
