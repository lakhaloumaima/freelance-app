import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InternGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  user_role: any=null
  userdata: any=null
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.user_role = sessionStorage.getItem('role');
      this.userdata = sessionStorage.getItem('userdata');
      if (this.userdata != null && this.user_role =="stagiaire" ){
        return true;
      }else{
        this.router.navigate(['/index']);
        return false;
      }

  }

}

