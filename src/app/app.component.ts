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
  result;
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
    return this.result = this.selezionaPosto(PostoSelezionato_Array, PostoScelto_HTML, teatroIntero, this.bottoni);
  }

  public selezionaPostoPalchi(counter1: any, counter2: any) {
    if(counter1>=1){
      this.righe = '0' + ((counter1).toString());
    }else{
      this.righe = counter1.toString();
    }
    this.colonne = counter2.toString();
    var sum = this.righe+this.colonne;
    if(sum>=10&&sum<=15)
      sum = sum-4;
    else if(sum>=20&&sum<=25)
      sum = sum-8;
    else if(sum>=30&&sum<=35)
      sum = sum-12;
    var sum_HTML = counter1+((counter2+1).toString());
    const teatroIntero = this.bottoni.concat(this.bottoni1);
    return this.result = this.selezionaPosto(sum, sum_HTML, teatroIntero, this.bottoni1);
  }

  selezionaPosto(PostoInArray: string|number, PostoInHTML: string, teatroIntero: any[], array: any[]){
    if((this.nominativo!='')&&(array[PostoInArray]==undefined)){
      array[PostoInArray] = this.nominativo;
      this.chiave_teatro = this.div;
        this.service.set_Postiteatro(this.chiave_teatro, teatroIntero).subscribe({
          next: () => {
            if(array==this.bottoni)
              document.getElementById('outputPrenotazione').innerHTML = 'Posto scelto in Platea ' + PostoInHTML + ' prenotato per ' + this.nominativo;
            else
              document.getElementById('outputPrenotazione').innerHTML = 'Posto scelto sul Palco ' + PostoInHTML + ' prenotato per ' + this.nominativo;
          },
          error: (err) => console.error(`Errore nell'observer: ${JSON.stringify(err)}`),
        });
        this.home=undefined;
        console.log(array)
    } 
    else if((this.nominativo!='')&&(array[PostoInArray]!=undefined)&&(array[PostoInArray]==this.nominativo)){
      document.getElementById('outputPrenotazione').innerHTML = 'Hai già prenotato questo posto';
    }
    
    else if((this.nominativo!='')&&(array[PostoInArray]!=undefined)&&(array[PostoInArray]!=this.nominativo)){
      document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + ' già prenotato da: ' + array[PostoInArray];
    }
    
    else if((this.nominativo=='')&&(array[PostoInArray]!=undefined)){
      document.getElementById('outputPrenotazione').innerHTML = 'Posto ' + ' già prenotato da: ' + array[PostoInArray];
    }
    
    else {
      document.getElementById('outputPrenotazione').innerHTML = 'Posto libero - Inserisci il nominativo';
    }
  }

  clean() {
    this.div=undefined;
    this.home='';
    this.nominativo='';
  }
}