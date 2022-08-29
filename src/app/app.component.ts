import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
/*let info = document.getElementById("data") as string|HTMLInputElement;
console.log(info)*/

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';

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
  result:string = "";
  constructor() {
    this.bottoni = Array(70)
      .fill(0)
      .map((x, i) => i + 1);
    this.bottoni1 = Array(24)
      .fill(0)
      .map((x, i) => i + 1);
  }

  public selezionaPostoPlatea(info: string, Numplatea: any) {
    for (var j = 0; j < this.bottoni.length; j++) {
      if (Numplatea == j) {
        if(info!=''){
          document.getElementById('output').innerHTML = 'nome inserito'; 
          this.bottoni[j]= info;
        } else {
          document.getElementById('output').innerHTML = 'nome vuoto';
        }
      }
      document.getElementById('output').innerHTML = 'Posto ' + (Numplatea+1) + ' prenotato per ' + info;
      this.home=undefined;
    }
    //this.div = undefined; RISOLVERE PROBLEMA DEL RITORNO ALLA PAGINA DI ACCESSO
    //risolvere problema della stampa del posto già prenotato. Per adesso non toccare i nomi inseriti nell'array
  }

  public selezionaPostoPalchi(info: string, Numpalchi: any) {
    for (var j = 0; j < this.bottoni1.length; j++) {
      if (Numpalchi == j) {
        if(info!=''){
          document.getElementById('output').innerHTML = 'nome inserito';
          this.bottoni1[j] = info;
          info = '';
          this.bottoni1[j].style.backgroundColor = "red";
          this.home=undefined;
        }
        else{
          document.getElementById('output').innerHTML = 'nome vuoto';
        }
      }
    }
  }

  EntryDatabase(key: string) {
    if(this.result!=''){
      document.getElementById('output').innerHTML = this.result;
    }
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
}