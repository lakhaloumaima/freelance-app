import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerr: any = "https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png";

  public connecte: boolean = false;

  messageError: any

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  user: User = {
    name:'',
    email: '',
    password: '',
    description:'',
  }

  constructor(private UsersSErvice: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  login() {

    const data = {
      user: {
        email: this.user.email,
        password: this.user.password,
      }
    };

    this.UsersSErvice.login(data).subscribe(
      response => {
        console.log(response);
        if (response.status == 401) {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User Not Found Or invalide Credentialns'
          })
        } else {
          if (response.user.email_confirmed == true && response.logged_in == true) {
            sessionStorage.setItem('userdata', JSON.stringify(response.user));
            sessionStorage.setItem('logged_in', response.logged_in);
            sessionStorage.setItem('role', response.role);
            sessionStorage.setItem('access_token',response.token);
            if (response.user.role == "employee") {
              this.route.navigate(['/employee']);
            }
            else if (response.user.role == "stagiaire") {
              this.route.navigate(['/intern']);
            } else if (response.user.role == "freelancer") {
              this.route.navigate(['/freelancer']);
            } else if (response.user.role == "admin") {
              this.route.navigate(['/admin']);
            } else if (response.user.role == "superadmin") {
              this.route.navigate(['/superadmin']);
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or Password is Incorrect!'
              })
            }
          } else {

            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'account created but not confirmed!, check Your EMail'
            })
          }

        }

      }, (err: HttpErrorResponse) => this.messageError = err.error.error);

  }


}