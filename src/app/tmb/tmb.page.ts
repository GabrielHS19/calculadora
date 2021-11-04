import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmb',
  templateUrl: './tmb.page.html',
  styleUrls: ['./tmb.page.scss'],
})
export class TmbPage implements OnInit {
 
  genero: string;
  altura: number;
  peso: number;
  edad: number;
  tmb: number;

  constructor() { }

  ngOnInit() {
  }

  calcularTMB(){
    if (this.genero == "Mujer"){
      let tmb = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) - 161
      this.tmb = parseFloat(tmb.toFixed(2));
     } else if (this.genero == "Hombre"){
      let tmb = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) + 5
      this.tmb = parseFloat(tmb.toFixed(2));
     }
  }
}
