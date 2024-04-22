import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {



  public connecte : boolean = false ;
  logged_in : boolean = false ;

  constructor(private http : HttpClient , public router: Router) { }

  login(data:any): Observable<any> {
    this.logged_in = true ;
    this.connecte = true;
    return this.http.post(environment.urlBackend + 'sessions/', data);
}




/********************** Certifications(freelance)   **********************************/

  getcertifications(user_id:any){
    return this.http.get(environment.urlBackend + 'get_user_certification/'+ user_id);
  }
  createnewcertification(data:any){
    return this.http.post(environment.urlBackend + 'certifications/', data);
  }

  updateCertification (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+ 'certifications/' + id , newdata )
  }

  deletecertification(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'certifications/' +id);
  }




























/********************** Experiences(freelance)   **********************************/

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
/********************** Trainings(freelance)   **********************************/

gettrainings(user_id:any){
  return this.http.get(environment.urlBackend + 'get_user_Formation/'+ user_id);
}
createnewtraining(data:any){
  return this.http.post(environment.urlBackend + 'formations/', data);
}

updateTraining (id:string,newdata:any) {
  return this.http.patch(environment.urlBackend+ 'formations/' + id , newdata )
}

deletetraining(id: any): Observable<any> {
  return this.http.delete(environment.urlBackend + 'formations/' +id);
}

/********************** Languages(freelance)   **********************************/

getlanguages(user_id:any){
  return this.http.get(environment.urlBackend + 'get_user_langue/'+ user_id);
}
createnewlanguage(data:any){
  return this.http.post(environment.urlBackend + 'user_langues/', data);
}

updateLanguage(id:string,newdata:any) {
  return this.http.patch(environment.urlBackend+ 'user_langues/' + id , newdata )
}

deletelanguage(id: any): Observable<any> {
  return this.http.delete(environment.urlBackend + 'user_langues/' +id);
}

/********************** Skills(freelance)   **********************************/

getskills(user_id:any){
  return this.http.get(environment.urlBackend + 'get_user_competence/'+ user_id);
}
createnewskill(data:any){
  return this.http.post(environment.urlBackend + 'competences/', data);
}

updateSkill(id:string,newdata:any) {
  return this.http.patch(environment.urlBackend+ 'competences/' + id , newdata );
}

deleteskill(id: any): Observable <any> {
  return this.http.delete(environment.urlBackend + 'competences/' +id);
}



/********************** All Offre(freelance)   **********************************/
  /********************** All Offre(freelancer)   **********************************/
getalloffres(){
  return this.http.get(environment.urlBackend + 'get_Freelance_offre_by_Frelancer/');
}




  /********************** Condidature (freelance)   **********************************/
  addcandidature(data:any){
    return this.http.post(environment.urlBackend + 'candidatures/', data );
  }

  getfreelancecandidature(user_id:any){
    return this.http.get(environment.urlBackend + 'get_candidature_by_User/'+ user_id);
  }
  deleteCandFreelance(id: any): Observable <any> {
    return this.http.delete(environment.urlBackend + 'candidatures/' +id);
  }

/********************************favoris **************************************/
addFavoris(data:any){
  return this.http.post(environment.urlBackend+'favoris/' , data) ;
}


getallfavoris(id:any){
  return this.http.get(`${environment.urlBackend}`+'favoris/'+id)
}

deleteFavoris  (id:any) {
  return this.http.delete(environment.urlBackend+'favoris/' + id )
}
  /***********************Update Profil(Freelancer) ********************************/
  updateprofileuser (id:any,newprofile:any){
    return this.http.patch(environment.urlBackend+'users/' + id , newprofile )
  }
  updateimageuser (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'update_image_user/' + id , newprofile )
  }

  /***********************  Ended + InProgress Offers(Freelancer) ********************************/


  getallactivefreelanceoffers(id:any){
    return this.http.get(environment.urlBackend + 'get_active_offre_by_freelance/'+id);
  }
  deleteActiveFreelanceOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }

  updateProgress (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'offres/' + id , newdata )
  }

  getallendedfreelanceoffers(id:any){
    return this.http.get(environment.urlBackend + 'get_ended_offre_by_freelance/'+id);
  }
  deleteEndedFreelanceOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }
  getoffrebydomain(id:any) {
    return this.http.get(environment.urlBackend + 'get_Freelance_offre_by_Frelancer/' +id);
  }
}
