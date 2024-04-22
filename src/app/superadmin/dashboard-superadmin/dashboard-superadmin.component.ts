
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperadminService } from 'src/app/services/superadmin.service';


@Component({
  selector: 'app-dashboard-superadmin',
  templateUrl: './dashboard-superadmin.component.html',
  styleUrls: ['./dashboard-superadmin.component.css']
})
export class DashboardSuperadminComponent implements OnInit {
  dataArray: any = [];
  searchedKeyword!: string;
  messageErr = "";
  chartType: any;
  chartOptions: any
  chartDatasets: any = [];
  chartLabels: any = [];
  chartColors: any = [];
  chartReady = false;

  admindata: any;

  constructor(private sprservice: SuperadminService, private route: Router) {
    this.chartType = 'bar';
    this.admindata = JSON.parse(sessionStorage.getItem('admindata')!);


    this.chartLabels = ['Employee', 'Stagiaire', 'Freelancer', 'admin', 'offer'];

    this.chartColors = [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(135, 107, 28, 0.2)',


        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(135, 107, 28, 1)',



        ],
        borderWidth: 2,
      }
    ];


    this.chartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            precision: 0
          }
        }]
      },
      barPercentage: 0.6,
      categoryPercentage: 0.8
    };


    this.sprservice.countall().subscribe(result => {
      this.chartDatasets = [
        { data: [result.data[0], result.data[1], result.data[2], result.data[3], result.data[4] ], label: 'Superadmin Officiel statistic' }];
      this.chartReady = true;
      this.dataArray = result,
        (err: HttpErrorResponse) => {
          this.messageErr = "We dont't found this user in our database"
        }
    })
  }
  chartClicked(event: any): void {
  }

  chartHovered(event: any): void {
  }
  ngOnInit(): void {

  }

}
