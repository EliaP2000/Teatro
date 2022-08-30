import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';

/*problemi da risolvere: array sy 7 linee
                         colore della cella
                         inserire la get per connettersi al database esterno
                         posto già assegnato (facoltativo)
*/

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
  div: string;
  home: string = "";
  constructor() {
    this.bottoni = Array(70)
      .fill(0)
      .map((x, i) => i + 1);
    this.bottoni1 = Array(24)
      .fill(0)
      .map((x, i) => i + 1);
  /*  for (var j = 0; j < this.bottoni.length; j++) {
      var x = j;
      if(x%10==0&&x!=0){
        console.log(x)
        var a = this.bottoni.splice(0,x);
        var b = this.bottoni.splice(+x);
      }
    }
    for (var j = 0; j < this.bottoni1.length; j++) {
      if(j%10==0&&j!=0){
        console.log(j)
        var b = this.bottoni1.splice(j,-j)
      }
    }*/
  }

  public selezionaPostoPlatea(info: string, Numplatea: any) {
    for (var j = 0; j < this.bottoni.length; j++) {
      if (Numplatea == j) {
        if(info!=''){
          document.getElementById('output').innerHTML = 'Posto in Platea ' + (Numplatea+1) + ' prenotato per ' + info;
          this.bottoni[j] = info;
          this.home=undefined;
        } else {
          document.getElementById('output').innerHTML = 'nome vuoto';
        }
      }
    }
  }

  public selezionaPostoPalchi(info: string, Numpalchi: any) {
    for (var j = 0; j < this.bottoni1.length; j++) {
      if (Numpalchi == j) {
        if(info!=''){
          document.getElementById('output').innerHTML = 'Posto sul Palco ' + (Numpalchi+1) + ' prenotato per ' + info;
          this.bottoni1[j] = info;
          this.home=undefined;
        }
        else{
          document.getElementById('output').innerHTML = 'nome vuoto';
        }
      }
    }
  }

  EntryDatabase(key: string) {
    if (key == '6a435159') {
      document.getElementById('output').innerHTML = 'chiave corretta';
      this.div = key;
      const obs = ajax({
        method: 'POST',
        url: URL + '/set?key=' + key,
        crossDomain: true,
        //body: document.getElementById('data').value
      });
      obs.subscribe({
        next: (res: AjaxResponse<any>) => {
          document.getElementById('output').innerHTML = 'Ok!'; //response se il nuovo valore venisse settato
        },
        error: (err: AjaxError) => console.error(err.response),
      });
    } else if(key == ''){
      document.getElementById('output').innerHTML = 'chiave non inserita';
    }
    else{
      document.getElementById('output').innerHTML = 'chiave errata';
    }
  }
  
  clean() {
    this.div=undefined;
  }
  cleanTeatro(){
    var cleaner = document.getElementById('bottoneRESET');
    for (var j = 0; j < this.bottoni.length; j++) {
      this.bottoni[j] = j;
    }
    for (var j = 0; j < this.bottoni1.length; j++) {
      this.bottoni1[j] = j;
    }
  }
}