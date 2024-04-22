import { Injectable } from '@angular/core';
import { Router } from  '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  public connecte : boolean = false ;
  logged_in : boolean = false ;

  constructor(private http : HttpClient , public router: Router) { }

  login(data:any): Observable<any> {
    this.logged_in = true ;
    this.connecte = true;
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }


  getoffresbydomain(id:any) {
    return this.http.get(environment.urlBackend + 'getoffrebydomain/' +id);
  }
  getoffresbydomain2(id:any) {
    return this.http.get(environment.urlBackend + 'getoffrebydomain2/' +id);
  }
  getoffrebydomain3(id:any) {
    return this.http.get(environment.urlBackend + 'getoffrebydomain3/' +id);
  }
  getalllocations(){
    return this.http.get(environment.urlBackend + 'getalllocations/');
  }


  getoffrebybudget(minSalary: number, maxSalary: number): Observable<any> {
    const url = `${environment.urlBackend}getoffrebybudget/${minSalary}/${maxSalary}`;
    return this.http.get(url);
  }
  getoffrebybudget2(minSalary: number, maxSalary: number): Observable<any> {
    const url = `${environment.urlBackend}getoffrebybudget2/${minSalary}/${maxSalary}`;
    return this.http.get(url);
  }
  getoffrebybudget3(minSalary: number, maxSalary: number): Observable<any> {
    const url = `${environment.urlBackend}getoffrebybudget3/${minSalary}/${maxSalary}`;
    return this.http.get(url);
  }
/********************** Domains(superadmin)   **********************************/
  getalldomains(){
    return this.http.get(environment.urlBackend + 'domains/');
  }
  getdomainbyid(id:any){
    return this.http.get(environment.urlBackend + 'domains/'+ id);
  }
  createnewdomain(data:any){
    return this.http.post(environment.urlBackend + 'domains/', data);
  }

  updateDomain (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'domains/' + id , newdata )
  }

  deleteDomain(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'domains/' +id);
  }
/********************** Categories(superadmin)   **********************************/
  getallcategories(){
    return this.http.get(environment.urlBackend + 'categories/');
  }
  getcategorybydomain(id:any){
    return this.http.get(environment.urlBackend + 'get_categorie_by_domain/' +id);
  }
  createnewcategory(data:any){
    return this.http.post(environment.urlBackend + 'categories/', data);
  }

  updateCategory (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'categories/' + id , newdata )
  }

  deleteCategory(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'categories/' +id);
  }
/********************** subcategories(superadmin)   **********************************/

  getallsubcategories(){
    return this.http.get(environment.urlBackend + 'souscategories/');
  }

  getsubcategorybycategory(id:any){
    return this.http.get(environment.urlBackend + 'get_sous_categorie_by_categorie/' +id);
  }
  createnewsubcategory(data:any){
    return this.http.post(environment.urlBackend + 'souscategories/', data);
  }

  updateSubcategory (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'souscategories/' + id , newdata )
  }
  deleteSubcategory(id: any): Observable<any> {
    return this.http.delete(environment.urlBackend + 'souscategories/' +id);
  }

  /********************** languages(superadmin)   **********************************/

  getalllanguages(){
    return this.http.get(environment.urlBackend + 'langues/');
  }

  createnewlanguage(data:any){
    return this.http.post(environment.urlBackend + 'langues/', data);
  }

  deleteLanguage(id:any){
    return this.http.delete(environment.urlBackend + 'langues/'+ id);
  }


  updateLanguage (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'langues/' + id , newdata )
  }

  /********************** All Users(superadmin)  **********************************/

  getallusers(){
    return this.http.get(environment.urlBackend + 'users/');
  }
  deleteUser(id:any){
    return this.http.delete(environment.urlBackend + 'users/' +id);
  }
  getallCompanies(){
    return this.http.get(environment.urlBackend + 'get_admin_users/');
  }



  /********************** All offres(superadmin)   **********************************/

  getalloffres(){
    return this.http.get(environment.urlBackend + 'offres/');
  }
  deleteOffre(id:any){
    return this.http.delete(environment.urlBackend + 'offres/' +id);
  }
  /***********************Update Profil(SuperAdmin) ********************************/
  updateProfileUser (id:any,newprofile:any){
    return this.http.patch(environment.urlBackend+'users/' + id , newprofile )
  }
  updateimageuser (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'update_image_user/' + id , newprofile )
  }

  /**********************  statistic   **********************************/
  countall(){
    return this.http.get<any>(environment.urlBackend + 'static/');
  }

  static_home(){
    return this.http.get<any>(environment.urlBackend + 'static_home/');
  }
  /**********************  Add Offre Verification   **********************************/

  addverification (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'offres/' + id , newdata )
  }

  getallcandidates(){
    return this.http.get(environment.urlBackend + 'get_candidates/');
  }
}
