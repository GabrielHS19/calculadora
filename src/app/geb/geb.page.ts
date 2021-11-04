import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geb',
  templateUrl: './geb.page.html',
  styleUrls: ['./geb.page.scss'],
})
export class GebPage implements OnInit {

  genero: string;
  altura: number;
  peso: number;
  edad: number;
  geb: number;

  constructor() { }

  ngOnInit() {
  }

  calcularGEB(){
 if (this.genero == "Mujer"){
      let geb = 665.0955 + (9.6534 * this.peso) + (1.8496 * this.altura) - (4.6756 * this.edad)
      this.geb = parseFloat(geb.toFixed(2));
     } else if (this.genero == "Hombre"){
      let geb = 66.473 + (13.752 * this.peso) + (5.003 * this.altura) - (6.755 * this.edad)
      this.geb = parseFloat(geb.toFixed(2));
     }
  }
}
