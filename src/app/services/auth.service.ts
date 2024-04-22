import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  access_token: any=null
  constructor(private http : HttpClient , public router: Router) { }

  register(data:any){
    return this.http.post(environment.urlBackend + 'registrations/' , data)
  }


  login(data: any): Observable<any>{
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }

  getallusers(){
    return this.http.get(environment.urlBackend + 'domains/');
  }

  sendnewdomain(data:any){
    return this.http.post(environment.urlBackend + 'domains/', data);
  }

  getToken(){

    this.access_token =  sessionStorage.getItem('access_token');
    return   this.access_token
  }
  logout(){
    sessionStorage.clear();
    return this.http.delete(environment.urlBackend+  'sessions/') ;
  }
}
