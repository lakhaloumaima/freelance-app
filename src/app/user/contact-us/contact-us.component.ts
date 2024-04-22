import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {


  error:any ;
  //sendemail: any ;
 
  constructor( ) {

   /* this.sendemail = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
    */
   }

  ngOnInit(): void {
  }
  
  public sendEmail(e: Event) {
    e.preventDefault();
    /* const formData = new FormData();
      formData.append('name', this.sendemail.value.name);
      formData.append('email', this.sendemail.value.email);
      formData.append('message', this.sendemail.value.message);
    */
    emailjs.sendForm('service_q2kxiar', 'template_4aywf0z', e.target as HTMLFormElement, 'kJmc9ohr6sD_cbW3J')
      .then((result: EmailJSResponseStatus) => {
       
        console.log(result.text);
        Swal.fire('Email Succefully Sended !', '', 'success')
      }, (error: { text: any; }) => {
        
        console.log(error.text);
        Swal.fire('Email Not Sended !', '', 'error')
      });

    
    }
  

}
