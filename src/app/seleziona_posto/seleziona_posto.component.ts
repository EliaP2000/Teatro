import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app_seleziona_posto',
  templateUrl: './seleziona_posto.component.html',
  styleUrls: ['./seleziona_posto.component.css']
})

export class seleziona_posto_component {
  @Output() seleziona_posto_event = new EventEmitter<string>();

  constructor(private service: teatro_service) { }

  public selezionaPostoPlatea(info: string, counter1: any, counter2: any) {
    this.righe = counter1.toString();
    this.colonne = counter2.toString();
    var sum = this.righe+this.colonne;
    for (var j = 0; j < this.bottoni.length; j++) {
      if (sum==j) {
        if((info!='')&&(info!=this.bottoni[j])&&(typeof this.bottoni[j]!=='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto in Platea ' + (j+1) + ' prenotato per ' + info;
            this.bottoni[j] = info;
            this.home=undefined;
        } else if(info==this.bottoni[j]){
            document.getElementById('outputPrenotazione').innerHTML = 'Hai già prenotato il posto ' + (j+1);
        } else if((info!='')&&(typeof this.bottoni[j]==='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + (j+1) +' già prenotato da: ' + this.bottoni[j];
        }
        else {
          document.getElementById('outputPrenotazione').innerHTML = 'Casella Nome vuoto';
        }
      }
    }
  }

  public selezionaPostoPalchi(info: string, counter1: any, counter2: any,) {
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
        if((info!='')&&(info!=this.bottoni1[j])&&(typeof this.bottoni1[j]!=='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto sul Palco ' + (j+1) + ' prenotato per ' + info;
          this.bottoni1[j] = info;
          this.home=undefined;
        } else if(info==this.bottoni1[j]){
            document.getElementById('outputPrenotazione').innerHTML = 'Hai già prenotato il posto ' + (j+1);
        } else if((info!='')&&(typeof this.bottoni1[j]==='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + (j+1) +' già prenotato da: ' + this.bottoni1[j];
        }
        else {
          document.getElementById('outputPrenotazione').innerHTML = 'Casella Nome vuoto';
        }
      }
    }
  }
}