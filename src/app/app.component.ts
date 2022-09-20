import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

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
  righe;
  colonne;
  constructor() {
    this.bottoni = Array(70)
      .fill(0)
      .map((x, i) => i + 1);
    this.bottoni1 = Array(24)
      .fill(0)
      .map((x, i) => i + 1);
  }

  public selezionaPostoPlatea(info: string, counter1: any, counter2: any) {
    this.righe = counter1.toString();
    this.colonne = counter2.toString();
    var sum = this.righe+this.colonne;
    for (var j = 0; j < this.bottoni.length; j++) {
      if (sum==j) {
        if((info!='')&&(info!=this.bottoni[j])&&(typeof this.bottoni[j]!=='string')){
            document.getElementById('outputPrenotazione').innerHTML = 'Posto in Platea ' + (j+1) + ' prenotato per ' + info;
            this.bottoni[j] = info;
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

  EntryDatabase(key: string) {
    if (key == '6a435159') {
      var conn = this.getValue(key);
      conn = this.setValue(key);
    } else if(key == ''){
      document.getElementById('output').innerHTML = 'chiave non inserita';
    }
    else{
      document.getElementById('output').innerHTML = 'chiave errata';
    }
  }

  getValue(key: string) {
    const obs = ajax({
      method: 'GET',
      url: URL + '/get?key=' + key,
      crossDomain: true,
    });
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
        console.log(res.response);
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }

  setValue(key: string) {
    const obs = ajax({
      method: 'POST',
      url:URL + '/set?key=' + key,
      crossDomain: true,
      body: '6a435159',
    })
    obs.subscribe({
      next: (res: AjaxResponse<any>) => {
        console.log('Ok!');
      },
      error: (err: AjaxError) => console.error(err.response),
    });
  }

}