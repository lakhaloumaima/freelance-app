import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  messageError:any
  messageError2:any
  messageError3:any
  messageError4:any
  messageError5:any
  registerr:any = "https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png";
  constructor(private freelancersService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  register(f: any) {
    let data = f.value;
  
    if (data.email.length === 0) {
      this.messageError = "Email required";
      return;
    } else if (data.role.length === 0) {
      this.messageError2 = "Role required";
      return;
    }
  
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      this.messageError3 = "Invalid email format";
      return;
    }
  
    // Password length validation
    if (data.password.length < 8) {
      this.messageError4 = "Password should be at least 8 characters long";
      return;
    }
    if (data.password !== data.password_confirmation) {
      this.messageError5 = "Password confirmation doesn't match Password ";
      return;
    }
  
    let registerButton = document.getElementById('registerButton') as HTMLButtonElement;
    registerButton.disabled = true;
    registerButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
  
    if (data.email.length !== 0) {
      (async () => {
        try {
          const response = await this.freelancersService.register(data).toPromise();
          this.messageError = "";
          this.messageError2 = "";
          this.messageError3 = "";
          this.messageError4 = "";
          this.messageError5 = "";
          Swal.fire('Whooa!', 'Account successfully created. Activate your email to access your account profile!', 'success')
          
            .then(() => {
              registerButton.disabled = false;
              registerButton.innerHTML = 'Register';

            });
        } catch (error) {
          console.log(error);
          if (error instanceof HttpErrorResponse) {
            registerButton.disabled = false;
            this.messageError = "Email taken";
          }
        }
      })();
    } else {
      this.messageError = "Champs required";
    }
  }

}