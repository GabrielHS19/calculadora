import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  calcularTMB(){
    if(this.altura >0 && this.peso > 0 && this.edad >0 && this.genero=='Mujer' || this.genero=='Hombre'){
    if (this.genero == "Mujer"){
      let tmb = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) - 161
      this.tmb = parseFloat(tmb.toFixed(2));
     } else if (this.genero == "Hombre"){
      let tmb = (10 * this.peso) + (6.25 * this.altura) - (5 * this.edad) + 5
      this.tmb = parseFloat(tmb.toFixed(2));
     }
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
