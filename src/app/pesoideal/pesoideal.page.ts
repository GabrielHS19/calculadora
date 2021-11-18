import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pesoideal',
  templateUrl: './pesoideal.page.html',
  styleUrls: ['./pesoideal.page.scss'],
})
export class PesoidealPage implements OnInit {

  gender: string;
  height: number;
  weightValue: number;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  calculateIdealWeight() {
    if(this.height >0 && this.gender=='Mujer' || this.gender=='Hombre'){
    if (this.gender == "Mujer"){
      let finalIdealWeight = 50 + (.6 * (this.height - 150))
      this.weightValue = parseFloat(finalIdealWeight.toFixed(2));
     } else if (this.gender == "Hombre"){
      let finalIdealWeight = 50 + (.75 * (this.height - 150))
      this.weightValue = parseFloat(finalIdealWeight.toFixed(2));
     }
    }else{
      this.showAlert()
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
