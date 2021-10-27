import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;

  constructor() { }

  ngOnInit() {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

   setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Bajo peso"
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Exceso de peso"
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obeso"
    }
  }

}
