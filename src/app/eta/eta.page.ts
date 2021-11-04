import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eta',
  templateUrl: './eta.page.html',
  styleUrls: ['./eta.page.scss'],
})
export class EtaPage implements OnInit {
  
  geb: number;
  eta: number;

  constructor() { }

  ngOnInit() {
  }

calcularETA(){
let eta = (0.1 * this.geb) + this.geb
this.eta = parseFloat(eta.toFixed(2));
}


}
