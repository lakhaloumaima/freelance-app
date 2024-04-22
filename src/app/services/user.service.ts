import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public connecte : boolean = false ;
  logged_in : boolean = false ;

  constructor(private http : HttpClient , public router: Router) { }

/********************** offre details(User)   **********************************/

offrehomedata(id:any){
    return this.http.get(environment.urlBackend + 'missiondata/'+ id);
  }
/********************** profil details(User)   **********************************/

get_user_Data(id:any){
  return this.http.get(environment.urlBackend + 'users/'+ id);
}
get_user_Formation(id:any){
  return this.http.get(environment.urlBackend + 'get_user_Formation/'+ id);
}
get_user_certification(id:any){
  return this.http.get(environment.urlBackend + 'get_user_certification/'+ id);
}
get_user_experience(id:any){
  return this.http.get(environment.urlBackend + 'get_user_experience/'+ id);
}

get_user_langue(id:any){
  return this.http.get(environment.urlBackend + 'get_user_langue/'+ id);
}
get_user_competence(id:any){
  return this.http.get<any>(environment.urlBackend + 'get_user_competence/'+ id);
}


count_all_Admin(user_id : any  ) {
  return this.http.get<any>(`${environment.urlBackend}` + 'count_all_for_admin/' + user_id )
}
static_admin() {
  return this.http.get<any>(`${environment.urlBackend}` + 'static_admin/'  )
}
/*****************reset password +forgot */
sendresetlink (email:any)  {
  return this.http.post(environment.urlBackend+'password_resets/',email) ;
}
resetpassword(token:string,email:any){
  return this.http.put(environment.urlBackend+'password_resets/'+token,email);
}

}
