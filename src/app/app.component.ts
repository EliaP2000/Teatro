import { Component } from '@angular/core';
import { teatro_service } from './teatro.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
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
    if(counter1>=1){
      this.righe = '0' + ((counter1).toString());
    }else{
      this.righe = counter1.toString();
    }
    this.colonne = counter2.toString();
    var PostoSelezionato_Array = this.righe+this.colonne;
    var PostoScelto_HTML = counter1+((counter2+1).toString());
    const teatroIntero = this.bottoni.concat(this.bottoni1);
    if(this.nominativo!=''){
      this.bottoni[ ] = this.nominativo;
      this.chiave_teatro = this.div;
        this.service.set_Postiteatro(this.chiave_teatro, teatroIntero).subscribe({
          next: () => {
            document.getElementById('outputPrenotazione').innerHTML = 'Posto in Platea ' + PostoScelto_HTML + ' prenotato per ' + this.nominativo;
          },
          error: (err) => console.error(`Errore nell'observer: ${JSON.stringify(err)}`),
        });
        this.home=undefined;
        console.log(this.bottoni)
    } 
    
    else if((this.nominativo!='')&&(this.bottoni[PostoSelezionato_Array]!=undefined)&&(this.bottoni[PostoSelezionato_Array]==this.nominativo)){
      document.getElementById('outputPrenotazione').innerHTML = 'Hai già prenotato questo posto';
    }
    
    else if((this.nominativo!='')&&(this.bottoni[PostoSelezionato_Array]!=undefined)&&(this.bottoni[PostoSelezionato_Array]!=this.nominativo)){
      document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + ' già prenotato da: ' + this.bottoni[PostoSelezionato_Array];
    }
    
    else if((this.nominativo=='')&&(this.bottoni[PostoSelezionato_Array]!=undefined)){
      document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + ' già prenotato da: ' + this.bottoni[PostoSelezionato_Array];
    }
    
    else {
      document.getElementById('outputPrenotazione').innerHTML = 'Posto libero - Inserisci il nominativo';
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
    this.nominativo='';
  }

  cleanTeatro(){
    for (var j = 0; j < this.bottoni.length; j++) {
      this.bottoni[j] = j+1;
    }
    for (var j = 0; j < this.bottoni1.length; j++) {
      this.bottoni1[j] = j+1;
    }
  }
}