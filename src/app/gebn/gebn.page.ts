import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gebn',
  templateUrl: './gebn.page.html',
  styleUrls: ['./gebn.page.scss'],
})
export class GebnPage implements OnInit {
  altura: number;
  peso: number;
  edad: number;
  geb: number;
  constructor() { }

  ngOnInit() {
  }
  calcularGEB(){
    let geb = 655.09+(9.56*this.peso ) + (1.84*this.altura) - (4.67*this.edad)
    this.geb = parseFloat(geb.toFixed(2));
  }
}
