import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  userdata:any;
  showSidebar = false;

  constructor(private route: Router) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;

  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }


}