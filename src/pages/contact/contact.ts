import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  lista = []
  constructor(public navCtrl: NavController) {
    this.lista=[
      {cardapio:"Feijão Tropeiro",valor:"1200 pts"},
      {cardapio:"Feijoada",valor:"1000 pts"},
      {cardapio:"Strogonoff",valor:"850 pts"},
      {cardapio:"Steak",valor:"700 pts"},
      {cardapio:"Carne Moída",valor:"575 pts"},
      {cardapio:"Almondega",valor:"550 pts"},
      {cardapio:"Carne da vovó ",valor:"300 pts"},


    ];

  }

}
