import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public event = {
    month: '2018-09-10',

  }

  barChartOptions: any = [{
    scales: {
       yAxes: [
        {
            display: true,
            ticks: {
              fontSize: 10,
              colors: '#fff'
            }
        }
      ]
    }
  }];
  barChartLabels = [];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartData:any;
 

  doughnutChartLabels:string[];
  doughnutChartData:number[];
  doughnutChartType:string = 'pie';
  
  constructor(public navCtrl: NavController) {

  }

  calc(tipo){
    if (tipo === 'line') {
        this.calcBar();
    } else {
        this.calcDoughnut();
    }
  }
  
  calcBar(){
    this.barChartLabels = ['11:00', '11:15', '11:30', '11:45','12:00', '12:15', '12:20', '12:30'];      
    this.barChartData = [
  	  {data: [15,25,50, 10,10, 10,7,13], label: 'Ótimo'},
        {data: [20,20,15,25,40,30,15,35], label: 'Bom'},
        {data: [50,100,300,50,25, 235, 40,20 ], label: 'Ruim'},
        {data: [450, 750, 250,150, 300,100,350,350], label: 'Péssimo'}
        
    ];
  }
  
  calcDoughnut(){
    this.doughnutChartLabels = ['Ótimo', 'Bom', 'Ruim', 'Péssimo'];
    this.doughnutChartData = [140, 200,820,2700];
  };
  monthChange(val: any) {
    console.log('Month Change:', val);
  }

  dayChange(val: any) {
    console.log('Day Change:', val);
  }

}
