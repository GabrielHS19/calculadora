import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
