import { Component } from '@angular/core';
import { teatro_service } from './teatro.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public value: any;
  public style: CSSStyleDeclaration;
  bottoni = [];
  bottoni1 = [];
  righe;
  colonne;
  div: string;
  home: string = "";
  nominativo = "";
  chiave_teatro = "";
  constructor(private service: teatro_service) {
    this.bottoni = Array(70)
      .fill(1)
      .map((x, i) => i + 1);
    this.bottoni1 = Array(24)
      .fill(1)
      .map((x, i) => i + 1);
  }

  public selezionaPostoPlatea(counter1: any, counter2: any) {
    this.righe = counter1.toString();
    this.colonne = counter2.toString();
    var sum = this.righe+this.colonne;
    const teatroIntero = this.bottoni.concat(this.bottoni1);
    for (var j = 0; j < this.bottoni.length; j++) {
      if (sum==j) {
        if((this.nominativo!='')&&(this.nominativo!=this.bottoni[j])&&(typeof this.bottoni[j]!=='string')){
          this.chiave_teatro = this.div;
          document.getElementById('outputPrenotazione').innerHTML = 'Posto in Platea ' + (j+1) + ' prenotato per ' + this.nominativo;
          this.bottoni[j] = this.nominativo;
          this.home=undefined;
          this.nominativo = "";
        } else if(this.nominativo==this.bottoni[j]){
            document.getElementById('outputPrenotazione').innerHTML = 'Hai già prenotato il posto ' + (j+1);
        } else if((this.nominativo!='')&&(typeof this.bottoni[j]==='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + (j+1) +' già prenotato da: ' + this.bottoni[j];
        } else {
          document.getElementById('outputPrenotazione').innerHTML = 'Non hai inserito il nome per la prenotazione';
        }
      }
    }
  }

  public selezionaPostoPalchi(counter1: any, counter2: any,) {
    this.righe = counter1.toString();
    this.colonne = counter2.toString();
    var sum = this.righe+this.colonne;
    if(sum>=10&&sum<=15)
      sum = sum-4;
    else if(sum>=20&&sum<=25)
      sum = sum-8;
    else if(sum>=30&&sum<=35)
      sum = sum-12;
    for (var j = 0; j < 36; j++) {
      if (sum==j) {
        if((this.nominativo!='')&&(this.nominativo!=this.bottoni1[j])&&(typeof this.bottoni1[j]!=='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto sul Palco ' + (j+1) + ' prenotato per ' + this.nominativo;
          this.bottoni1[j] = this.nominativo;
          this.home=undefined;
        } else if(this.nominativo==this.bottoni1[j]){
            document.getElementById('outputPrenotazione').innerHTML = 'Hai già prenotato il posto ' + (j+1);
        } else if((this.nominativo!='')&&(typeof this.bottoni1[j]==='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + (j+1) +' già prenotato da: ' + this.bottoni1[j];
        }
        else {
          document.getElementById('outputPrenotazione').innerHTML = 'Casella Nome vuoto';
        }
      }
    }
  }

  clean() {
    this.div=undefined;
    this.home='';
  }

  cleanTeatro(){
    for (var j = 0; j < this.bottoni.length; j++) {
      this.bottoni[j] = j;
    }
    for (var j = 0; j < this.bottoni1.length; j++) {
      this.bottoni1[j] = j;
    }
  }
}