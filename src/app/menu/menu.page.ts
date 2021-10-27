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


}
