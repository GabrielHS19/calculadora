import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eta',
  templateUrl: './eta.page.html',
  styleUrls: ['./eta.page.scss'],
})
export class EtaPage implements OnInit {
  
  geb: number;
  eta: number;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

calcularETA(){
  if(this.geb >0){
let eta = (0.1 * this.geb) + this.geb
this.eta = parseFloat(eta.toFixed(2));
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
