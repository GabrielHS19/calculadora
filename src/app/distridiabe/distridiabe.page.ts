import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-distridiabe',
  templateUrl: './distridiabe.page.html',
  styleUrls: ['./distridiabe.page.scss'],
})
export class DistridiabePage implements OnInit {

items = [];

vet : number;
phco : number;
ppro : number;
plip : number;
khco : number;
kpro : number;
klip : number;
ghco : number;
gpro : number;
glip : number;
totalk : number;
totalg : number;

  constructor() { 
this.items = Array();


  }
 
  ngOnInit() {
  }





  calculo(){
let khco = this.vet * this.phco;
this.khco = parseFloat(khco.toFixed(2));
let ghco = this.khco / 4;
this.ghco =parseFloat(ghco.toFixed(2));
 
let kpro = this.vet * this.ppro;
this.kpro = parseFloat(kpro.toFixed(2));
let gpro = this.kpro / 4;
this.gpro =parseFloat(gpro.toFixed(2));

let klip = this.vet * this.plip;
this.klip = parseFloat(klip.toFixed(2));
let glip = this.klip / 4;
this.glip =parseFloat(glip.toFixed(2));

let totalk = khco + kpro + klip; 
this.totalk = parseFloat(totalk.toFixed(2));

let totalg = ghco + gpro + glip; 
this.totalg = parseFloat(totalg.toFixed(2));

      }
}
