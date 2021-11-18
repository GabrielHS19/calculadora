import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  calcularGEB(){
    if(this.altura > 0 && this.peso >0 && this.edad >0){
    let geb = 655.09+(9.56*this.peso ) + (1.84*this.altura) - (4.67*this.edad)
    this.geb = parseFloat(geb.toFixed(2));
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
