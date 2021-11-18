import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.page.html',
  styleUrls: ['./vet.page.scss'],
})
export class VetPage implements OnInit {
eta : number;
faf : number;
vet : number;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  calculateVET(){
    if(this.eta >0 && this.faf > 0){
let vet = this.eta * this.faf;
this.vet = parseFloat(vet.toFixed(2));
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
