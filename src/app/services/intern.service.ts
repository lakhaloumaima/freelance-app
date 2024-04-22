import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  public connecte : boolean = false ;
  logged_in : boolean = false ;

  constructor(private http : HttpClient , public router: Router) { }

  login(data:any): Observable<any> {
    this.logged_in = true ;
    this.connecte = true;
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }


  getallinternoffers(){
    return this.http.get(environment.urlBackend + 'get_Stage_offre_by_Intern/');
  }
    /********************** Certifications  (intern)   **********************************/

  getcertifications(id: any){
    return this.http.get(environment.urlBackend + 'get_user_certification/'+id);
  }
  createnewcertification(data:any){
    return this.http.post(environment.urlBackend + 'certifications/', data);
  }
  updateCertification(id:string,newdata:any) {
    return this.http.patch(environment.urlBackend + 'certifications/' +id , newdata )
  }
  deletecertification(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'certifications/' +id);
  }
    /********************** Formation (intern)   **********************************/

  gettrainings(id: any){
    return this.http.get(environment.urlBackend + 'get_user_Formation/'+id);
  }
  createnewtraining(data:any){
    return this.http.post(environment.urlBackend + 'formations/', data);
  }
  updatetraining(id:string,newdata:any) {
    return this.http.patch(environment.urlBackend + 'formations/' +id , newdata )
  }
  deletetraining(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'formations/' +id);
  }
    /********************** Experiences (intern)   **********************************/

  getexperiences(id: any){
    return this.http.get(environment.urlBackend + 'get_user_experience/'+id);
  }
  createnewexperience(data:any){
    return this.http.post(environment.urlBackend + 'experiences/', data);
  }
  updateexperience(id:string,newdata:any) {
    return this.http.patch(environment.urlBackend + 'experiences/' +id , newdata )
  }
  deleteexperience(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'experiences/' +id);
  }
    /********************** Languages (intern)   **********************************/

  getalllanguages(){
    return this.http.get(environment.urlBackend + 'langues/');
  }
  getinternlanguages(id: any){
    return this.http.get(environment.urlBackend + 'get_user_langue/'+id);
  }
    /********************** Linguistic knowledge (intern)   **********************************/

  createnewlinguisticknoledge(data:any){
    return this.http.post(environment.urlBackend + 'user_langues/', data);
  }
  updatelinguisticknowledge(id:string,newdata:any) {
    return this.http.patch(environment.urlBackend + 'user_langues/' +id , newdata )
  }
  deletelinguisticknowledge(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'user_langues/' +id);
  }


  /********************** Condidature (intern)   **********************************/
addcandidature(data:any){
  return this.http.post(environment.urlBackend + 'candidatures/', data );
}

getinterncandidature(user_id:any){
  return this.http.get(environment.urlBackend + 'get_candidature_by_User/'+ user_id);
}
deleteCandInternship(id: any): Observable <any> {
  return this.http.delete(environment.urlBackend + 'candidatures/' +id);
}

//////////////********************************favoris *****************************/
addFavoris(data:any){
  return this.http.post(environment.urlBackend+'favoris/' , data) ;
}


getallfavoris(id:any){
  return this.http.get(`${environment.urlBackend}`+'favoris/'+id)
}

deleteFavoris  (id:any) {
  return this.http.delete(environment.urlBackend+'favoris/' + id )
}

/********************** All Offre(intern)   **********************************/
getalloffres(){
  return this.http.get(environment.urlBackend + 'get_Stage_offre_by_Intern/');
}

  /***********************Update Profil(Intern) ********************************/
  updateprofileuser (id:any,newprofile:any){
    return this.http.patch(environment.urlBackend+'users/' + id , newprofile )
  }
  updateimageuser (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'update_image_user/' + id , newprofile )
  }

}
