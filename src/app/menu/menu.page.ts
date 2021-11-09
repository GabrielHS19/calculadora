import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  

  constructor(public router:Router, private dataService: DataService) { }

  ngOnInit() {
    
  }

  goToIMC(){
    this.router.navigate(['./imc']);
  }
  goToPeso(){
    this.router.navigate(['./pesoideal']);
  }
  goToGEB(){
    this.router.navigate(['./geb']);
  }
  goToTMB(){
    this.router.navigate(['./tmb']);
  }
  goToFAF(){
    this.router.navigate(['./faf']);
  }
  goToETA(){
    this.router.navigate(['./eta']);
  }
  goToVET(){
    this.router.navigate(['./vet']);
  }
  goToDIS(){
    this.router.navigate(['./distridiabe']);
  }
  goToIMCPRE(){
    this.router.navigate(['./imcpre']);
  }
  goToGEBN(){
    this.router.navigate(['./gebn']);
  }
}
