import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { SuperadminService } from 'src/app/services/superadmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-freelancer',
  templateUrl: './dashboard-freelancer.component.html',
  styleUrls: ['./dashboard-freelancer.component.css']
})
export class DashboardFreelancerComponent   implements OnInit{
  allChecked: boolean = true;
rangeChecked1: boolean = false;
rangeChecked2: boolean = false;
rangeChecked3: boolean = false;
  preventAbuse = false;
    @ViewChild('verifiedBadge', { static: false }) verifiedBadge!: ElementRef;
    searchedKeyword!:string;
    dataArray: any;
    dataArray10: any;
    dataArray21: any;
    dataArray2: any;
    userdata:any
    sous_categories: any;
    messageErr = '' ;
    counter:any
    valueChanged = false;
    todayDate=new Date();
    p:number = 1 ;
      constructor(private supservice: SuperadminService,private route: Router,private frservice: FreelancerService) {
      this.userdata = JSON.parse( sessionStorage.getItem('userdata') !) ;
    }
    ngOnInit(): void {
      this.supservice.getalldomains().subscribe(data => {
        this.dataArray2 = data
        console.log(this.dataArray2)
        this.counter = this.dataArray2.length
        console.log(this.counter), (err: HttpErrorResponse) => {
          this.messageErr = "We dont't found any domain in our database"
        }
      })

      this.frservice.getalloffres().subscribe(data => {
        this.dataArray = data
     /*   this.sous_categories = this.dataArray.map((item: any) => {
          return item.offre_categories.map((offreCategory: any) => {
            return offreCategory.souscategorie.sous_categorie_name;
          });
        });*/
        console.log(this.dataArray)
        this.counter = this.dataArray.length
        console.log(this.counter), (err: HttpErrorResponse) => {
          this.messageErr = "We dont't found any candidature in our database"
        }
      })
    }
handleCheckboxChange(checkboxType: string): void {
  let rangeParam: string;
  if (checkboxType === 'all') {
    this.allChecked = true;
    this.rangeChecked1 = false;
    this.rangeChecked2 = false;
    this.rangeChecked3 = false;
  } else if (checkboxType === 'range1') {
    rangeParam = '0-100';
    this.allChecked = false;
    this.rangeChecked1 = true;
    this.rangeChecked2 = false;
    this.rangeChecked3 = false;
  }else if (checkboxType === 'range2') {
    this.allChecked = false;
    this.rangeChecked1 = false;
    this.rangeChecked2 = true;
    this.rangeChecked3 = false;
  }else if (checkboxType === 'range3') {
    this.allChecked = false;
    this.rangeChecked1 = false;
    this.rangeChecked2 = false;
    this.rangeChecked3 = true;
  }
}
getoffrebybudget(minSalary: number, maxSalary: number) {
  this.supservice.getoffrebybudget3(minSalary, maxSalary).subscribe(
    (data) => {
      this.dataArray = data;
      console.log(this.dataArray);
      this.counter = this.dataArray.length;
      console.log(this.counter);
      if (this.dataArray.length == 0) {
        this.messageErr = "We don't found any Offre in our database";
      } else {
        this.messageErr = "";
      }
      setTimeout(() => {
        this.preventAbuse = false;
      }, 800);
      this.counter = this.dataArray.length;
    },
    (err: HttpErrorResponse) => {
      this.messageErr = "We don't found any Offre in our database";
    }
  );
}



    getoffrebydomain(event: any): void {
      this.preventAbuse = true;
      const selectedDomainId = event.target.value; // Extract the domain_id from the event
      this.supservice.getoffrebydomain3(selectedDomainId).subscribe(data => {
        this.valueChanged = true;
        this.dataArray = data
        if(this.dataArray.length == 0)
        {
          this.messageErr = "We don't found any Offre in our database"
          console.log(this.messageErr)
        }else {
          this.messageErr = ""; // Clear the error message if there are offers
        }
        setTimeout(() => {
          this.preventAbuse = false;
        }, 800);
        this.counter = this.dataArray.length,
 (err: HttpErrorResponse) => {
          this.messageErr = "We don't found any Offre in our database"
        }
      })
    }


    addrequest(id: any) {
      if (this.userdata) {
        const formData = new FormData();
        formData.append('offre_id', id);
        formData.append('user_id', this.userdata.id);
        formData.append('date_postulation',this.todayDate.toISOString());
        this.frservice.addcandidature(formData).subscribe(() => {
          this.route.navigate(['/freelancer-condidatures'])

          console.log(formData)
          Swal.fire('Saved!', '', 'success')
        }, (err: HttpErrorResponse) => {
          this.messageErr = err.error

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cant Add Candidature on the same Offre twice '
          })

        });
      }
      else {
        Swal.fire('you must logged_in !', '', 'error')
        this.route.navigate(['/login'])
      }

    }
    addfavoris(id: any ) {

      if (this.userdata) {
        const formData = new FormData();
        formData.append('offre_id', id);
        formData.append('user_id', this.userdata.id);
        // let data=f.value
       // console.log(formData)
        this.frservice.addFavoris(formData).subscribe(() => {
          this.route.navigate(['/freelancer-favorite-list'])

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Add To Favorite Succefully  ',
            showConfirmButton: false,
            timer: 1500
          })
          // window.location.reload();


        }, (err: HttpErrorResponse) => {
          this.messageErr = err.error

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cant twice ',
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          })

        });
      }
      else {
        Swal.fire('you must logged_in !', '', 'error')
        this.route.navigate(['/login'])
      }
    }

    verifiedtest(verified:boolean){
      if(verified == true){
        Swal.fire('Offre not Verified !', '', 'error')
      }else{
        Swal.fire('item Verified!', '', 'success')
      }
    }
  }