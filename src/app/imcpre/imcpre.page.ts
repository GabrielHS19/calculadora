import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-imcpre',
  templateUrl: './imcpre.page.html',
  styleUrls: ['./imcpre.page.scss'],
})
export class ImcprePage implements OnInit {
  height: number;
  weight: number;
  bmiValue: number;
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height * this.height/10000);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
   
    }else{
      this.showAlert();
    }
  }

  async showAlert() { 
    const alert = await this.alertCtrl.create({ 
    header: 'Error', 
    message: 'Ingrese datos correctos', 
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
    } 

}
