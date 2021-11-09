import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.page.html',
  styleUrls: ['./vet.page.scss'],
})
export class VetPage implements OnInit {
eta : number;
faf : number;
vet : number;

  constructor() { }

  ngOnInit() {
  }
  calculateVET(){
let vet = this.eta * this.faf;
this.vet = parseFloat(vet.toFixed(2));
  }
}
