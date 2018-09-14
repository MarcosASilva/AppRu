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
  day = "13";
  month = "09"; 
  year = "2018";
  almoco = "Costelinha";
  ref = "a";
  t = "line";
  listac = ["a","b","c","d","e","f","g" ,"h"]

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
  barChartType: string = 'bar';
  barChartLegend: boolean = true;
  barChartData: any;


  doughnutChartLabels: string[];
  doughnutChartData: number[];
  doughnutChartType: string = 'pie';

  constructor(public navCtrl: NavController, ) {
    this.calcBar();
  }

  calc(tipo) {
    if (tipo === 'line') {
      this.calcBar();
      this.t='line';
    } else {
      this.t = 'a';
      this.calcDoughnut();
    }
  }

  calcBar() {
    this.barChartLabels = [];
    if(this.ref==="a"){
      this.barChartLabels = ['11:00', '11:30', '12:00', '12:30'];
      this.barChartData = [
        { data: [15, 25, 50, 10], label: 'Ótimo' },
        { data: [20, 20, 15, 25], label: 'Bom' },
        { data: [50, 100, 300, 50], label: 'Ruim' },
        { data: [450, 750, 250, 150], label: 'Péssimo' }
  
      ];
    }
    else{
      this.barChartLabels = ['17:45','18:15','18:30','18:45'];
      this.barChartData = [
        { data: [50,20,10,5], label: 'Ótimo' },
        { data: [120, 40, 40,10], label: 'Bom' },
        { data: [30, 60, 30,15], label: 'Ruim' },
        { data: [50, 75, 45,20], label: 'Péssimo' }
  
      ];
    }
  }

  calcDoughnut() {
    if(this.ref==="a"){
      this.doughnutChartLabels = ['Ótimo', 'Bom', 'Ruim', 'Péssimo'];
      this.doughnutChartData = [140, 200, 820, 2700];
    }
    else{
      this.doughnutChartLabels = ['Ótimo', 'Bom', 'Ruim', 'Péssimo'];
      this.doughnutChartData = [80, 200, 120, 170];
    }
  };
  
  monthChange(val: any) {
    console.log('Month Change:', val);
    this.month = val;
  }

  dayChange(val: any) {
    console.log('Day Change:', val);
    this.day = val;
  }
  yearChange(val: any) {
    console.log('Day Change:', val);
    this.year = val;
  }
  refeicao(val: any) {
    console.log('Day Change:', val);
    this.ref = val;
    if(this.ref==="a"){
      this.almoco = "Costelinha";
      if(this.t==="line"){
        this.calc('line');
      }else{
        this.calc('a');
      }
    }
    else{
      this.almoco = "Bife de Palmas";
      if(this.t==="line"){
        this.calc('line');
      }else{
        this.calc('a');
      }
    }

  }

}
