import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imcpre',
  templateUrl: './imcpre.page.html',
  styleUrls: ['./imcpre.page.scss'],
})
export class ImcprePage implements OnInit {
  height: number;
  weight: number;
  bmiValue: number;
  constructor() { }

  ngOnInit() {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height * this.height/10000);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
   
    }
  }
}
