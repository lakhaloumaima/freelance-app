import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  currentuser:any = [];
  constructor( ) {
    this.currentuser = JSON.parse( sessionStorage.getItem('userdata') !) ;
  }
}
