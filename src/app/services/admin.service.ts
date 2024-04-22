import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  update(id: string, formData: FormData) {
    throw new Error('Method not implemented.');
  }
  public connecte : boolean = false ;
  logged_in : boolean = false ;

  constructor(private http : HttpClient , public router: Router) { }

  login(data:any): Observable<any> {
    this.logged_in = true ;
    this.connecte = true;
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }


  get_message_by_candidature(candidature_id:any){
    return this.http.get(environment.urlBackend + 'get_message_by_candidature/'+ candidature_id);
  }
  getalljobs(id:any){
    return this.http.get(environment.urlBackend + 'get_Emploi_offre_by_Admin/'+id);
  }
  getallfreelance(id:any){
    return this.http.get(environment.urlBackend + 'get_Freelance_offre_by_Admin/'+id);
  }

  getallintership(id:any){
    return this.http.get(environment.urlBackend + 'get_Stage_offre_by_Admin/'+id);
  }


  addnewJob(data:any){
    return this.http.post(environment.urlBackend + 'offres/', data);
  }
  addnewInternship(data:any){
    return this.http.post(environment.urlBackend + 'offres/', data);
  }
  addnewFreelance(data:any){
    return this.http.post(environment.urlBackend + 'offres/', data);
  }


  deleteJob(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }
  deleteFreelance(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }
  deleteinternshipoffre(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }

  updateJob (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'offres/' + id , newdata )
  }
  updateFreelance (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'offres/' + id , newdata )
  }
  updateInternship (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'offres/' + id , newdata )
  }


  getallcandidaturesjob(id:any){
    return this.http.get(environment.urlBackend + 'get_emploi_candidature_by_Admin/'+id);
  }
  getInterviewInternshipCondidature(id:any){
    return this.http.get(environment.urlBackend + 'get_stage_Interview_by_Admin/'+id);
  }
  getInterviewFreelanceCondidature(id:any){
    return this.http.get(environment.urlBackend + 'get_freelance_Interview_by_Admin/'+id);
  }
  getInterviewJobCondidature(id:any){
    return this.http.get(environment.urlBackend + 'get_emploi_Interview_by_Admin/'+id);
  }

  getallcandidaturesfreelance(id:any){
    return this.http.get(environment.urlBackend + 'get_freelance_candidature_by_Admin/'+id);

  }

  getallcandidaturesinternship(id:any){
    return this.http.get(environment.urlBackend + 'get_stage_candidature_by_Admin/'+id);

  }


  deleteCandJob(id:any){
    return this.http.delete(environment.urlBackend + 'candidatures/' +id);
  }

  deleteCandFreelance(id:any){
    return this.http.delete(environment.urlBackend + 'candidatures/' +id);
  }
  deleteCandInternship(id:any){
    return this.http.delete(environment.urlBackend + 'candidatures/' +id);
  }

  updateCandFreelance (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'candidatures/' + id , newdata )
  }

  updateCandJob (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'candidatures/' + id , newdata )
  }

  addnewinterview (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'candidatures/' + id , newdata )
  }

  getallactivefreelanceoffers(id:any){
    return this.http.get(environment.urlBackend + 'get_Active_Freelance_offre_by_Admin/'+id);
  }

  getallendedfreelanceoffers(id:any){
    return this.http.get(environment.urlBackend + 'get_Ended_Freelance_offre_by_Admin/'+id);
  }

  deleteActiveFreelanceOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }

  deleteEndedFreelanceOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }


  getallactivejoboffers(id:any){
    return this.http.get(environment.urlBackend + 'get_Active_Job_offre_by_Admin/'+id);
  }

  deleteActiveJobOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }

  getallactiveinternshipoffers(id:any){
    return this.http.get(environment.urlBackend + 'get_Active_Internship_offre_by_Admin/'+id);
  }

  deleteActiveIntershipOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }

  getallendedinternshipoffers(id:any){
    return this.http.get(environment.urlBackend + 'get_Ended_Internship_offre_by_Admin/'+id);
  }
  deleteEndedInternshipOffer(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }

}


