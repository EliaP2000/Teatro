import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';
/*let info = document.getElementById("data") as string|HTMLInputElement;
console.log(info)*/

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
var BloccoInserimento = Array.from(
  document.getElementsByClassName(
    'divInserimento'
  ) as unknown as HTMLCollectionOf<HTMLElement>
);
var BloccoTeatro = Array.from(
  document.getElementsByClassName(
    'divTeatro'
  ) as unknown as HTMLCollectionOf<HTMLElement>
);

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
        this.bottoni[j] = info;
        //this.bottoni[j].style.backgroundColor = "red";
        info = '';
      }
    }
  }

  public selezionaPostoPalchi(info: string, Numpalchi: any) {
    for (var j = 0; j < this.bottoni1.length; j++) {
      if (Numpalchi == j) {
        this.bottoni1[j] = info;
        //this.bottoni1[j].style.backgroundColor = "red";
        info = '';
      }
    }
  }
  EntryDatabase(key: string) {
    var w = Array.from(
      document.getElementsByClassName('divEntry') as unknown as HTMLCollectionOf<HTMLElement>
    );
    for (var j = 0; j < w.length; j++) {
      if (key == '6a435159') {
        document.getElementById('output').innerHTML = 'chiave corretta';
        w[j].style.visibility = 'hidden';
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
      } else {
        document.getElementById('output').innerHTML = 'chiave errata';
      }
    }
  }

  showTeatro(nomeInserito: any) {
    if (nomeInserito != null) {
      for (var j = 0; j < BloccoInserimento.length; j++) {
        BloccoInserimento[j].style.visibility = 'hidden';
        BloccoTeatro[j].style.visibility = 'visibile';
        return BloccoInserimento || BloccoTeatro;
      }
    } else {
      for (var j = 0; j < BloccoInserimento.length; j++) {
        BloccoInserimento[j].style.visibility = 'visible';
        BloccoTeatro[j].style.visibility = 'hidden';
        return BloccoInserimento || BloccoTeatro;
      }
    }
  }
}

var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();
var Numplatea: any;
var Numpalchi: any;
var info: string;
var nomeInserito: any;
var key: string;

function EntryDatabase(key: string,string: any) {
throw new Error('Function not implemented.');
}

function showTeatro(nomeInserito: any,any: any) {
throw new Error('Function not implemented.');
}
/*far restituire a Database un return create element con un bottone e successivamente collegarci le varie parti
altrimenti controllare cosa non funzioni nel togliere l'array w dalla funzione database e renderla una variabile globale*/