import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-intern-favorit-list',
  templateUrl: './intern-favorit-list.component.html',
  styleUrls: ['./intern-favorit-list.component.css']
})
export class InternFavoritListComponent {
  dataArray: any ;
  messageErr: any ;
  userdata: any;



  constructor(private intservice:InternService) {
    this.userdata = JSON.parse( sessionStorage.getItem('userdata') !);

    }

  ngOnInit(): void {

    this.intservice.getallfavoris(this.userdata.id).subscribe(data=>{
      console.log(data)
      this.dataArray=data , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"}
      //console.log(this.dataArray)
    })

  }

  deleteFavoris(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.intservice.deleteFavoris(id).subscribe(response=>{
          window.location.reload();
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }
}
