import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InternService } from 'src/app/services/intern.service';
import { SuperadminService } from 'src/app/services/superadmin.service';

@Component({
  selector: 'app-intern-offres',
  templateUrl: './intern-offres.component.html',
  styleUrls: ['./intern-offres.component.css']
})
export class InternOffresComponent {
  counter:any
  counter1:any
  dataArray:any = []
  dataArray2:any = []
  dataArray3:any = []
  dataArray5:any = []
  p:number=1;
  messageErr="" ;
  searchedKeyword!:string;
  preventAbuse = false;
  allChecked: boolean = true;
  valueChanged = false;
  rangeChecked1: boolean = false;
  rangeChecked2: boolean = false;
  rangeChecked3: boolean = false;

  constructor(private sprservice:SuperadminService, private  intservice: InternService,private route:Router, private toastr: ToastrService,private supservice: SuperadminService) {

  }

    async ngOnInit(): Promise<void> {
      try {
        const data = await this.sprservice.getalldomains().toPromise();
        this.dataArray=data
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      } catch(error) {
        this.messageErr = "We don't found any domain in our database";
      }
      try {
        const data = await this.sprservice.getallcategories().toPromise();
        this.dataArray5=data
        console.log(this.dataArray)
        this.counter = this.dataArray.length;
      } catch(error) {
        this.messageErr = "We don't found any domain in our database";
      }
      try {
        const data = await this.intservice.getalloffres().toPromise();
        this.dataArray3=data
        console.log(this.dataArray3)
        this.counter1 = this.dataArray3.length;
       } catch(error) {
        this.messageErr = "We don't found any Company in our database";
      }
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
      this.supservice.getoffrebybudget2(minSalary, maxSalary).subscribe(
        (data) => {
          this.dataArray3 = data;
          console.log(this.dataArray3);
          this.counter = this.dataArray3.length;
          if(this.dataArray3.length == 0)
          {
            this.messageErr = "We don't found any Offre in our database"
            console.log(this.messageErr)
          }else {
            this.messageErr = ""; 
          }
          console.log(this.counter);
        },
        (err: HttpErrorResponse) => {
          this.messageErr = "We don't found any domain in our database";
        }
      );
    }
        getoffrebydomain(event: any): void {
          this.preventAbuse = true;
          const selectedDomainId = event.target.value; // Extract the domain_id from the event
          this.supservice.getoffrebydomain3(selectedDomainId).subscribe(data => {
            this.valueChanged = true;
            this.dataArray3 = data
            if(this.dataArray3.length == 0)
            {
              this.messageErr = "We don't found any Offre in our database"
              console.log(this.messageErr)
            }else {
              this.messageErr = ""; // Clear the error message if there are offers
            }
            setTimeout(() => {
              this.preventAbuse = false;
            }, 800);
            this.counter = this.dataArray3.length,
     (err: HttpErrorResponse) => {
              this.messageErr = "We don't found any Offre in our database"
            }
          })
        }
    
}
