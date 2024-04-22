import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  implements OnInit {
  logo:any = "./assets/lg.png";
  resetemaillink! :  FormGroup;
  messageSuccess = '' ;
  messageErr =''
  constructor(private usersService:UserService,private route:Router) {

    this.resetemaillink = new FormGroup({
      email: new FormControl('', [Validators.required])

    });
   }

  ngOnInit(): void {
  }
  sendresetlinkk (f:any)
  {
    let resetbutton = document.getElementById('resetbutton') as HTMLButtonElement;
    resetbutton.disabled = true;
    resetbutton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
    const formData = new FormData();
    formData.append('email', this.resetemaillink.value.email);
    let data=f.value

    this.usersService.sendresetlink(formData).subscribe( ()=>{

      Swal.fire('Reset Link Sent Avec Succes!', '', 'success')
      .then(() => {
        resetbutton.disabled = false;
        resetbutton.innerHTML = 'Sended';

      });

  },(err:HttpErrorResponse)=>{
    resetbutton.disabled = false;
    if (err instanceof HttpErrorResponse) {
      resetbutton.disabled = false;
      resetbutton.innerHTML = 'Send Reset Link';      
    }
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Email Does Not Exist',
       footer: '<a href="">Why do I have this issue?</a>'
     })


  }) ;
  }
}