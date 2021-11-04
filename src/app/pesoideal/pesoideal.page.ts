import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesoideal',
  templateUrl: './pesoideal.page.html',
  styleUrls: ['./pesoideal.page.scss'],
})
export class PesoidealPage implements OnInit {

  gender: string;
  height: number;
  weightValue: number;

  constructor() { }

  ngOnInit() {
  }

  calculateIdealWeight() {
    if (this.gender == "Mujer"){
      let finalIdealWeight = 50 + (.6 * (this.height - 150))
      this.weightValue = parseFloat(finalIdealWeight.toFixed(2));
     } else if (this.gender == "Hombre"){
      let finalIdealWeight = 50 + (.75 * (this.height - 150))
      this.weightValue = parseFloat(finalIdealWeight.toFixed(2));
     }
  
  }

}
