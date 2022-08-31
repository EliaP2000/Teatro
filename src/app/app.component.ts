import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';

/*problemi da risolvere: array sy 7 linee
                         colore della cella (facoltativo)
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
  numbersArray = [];
  div: string;
  home: string = "";
  constructor() {
    this.bottoni = Array(70)
      .fill(0)
      .map((x, i) => i + 1);
    this.bottoni1 = Array(24)
      .fill(0)
      .map((x, i) => i + 1);
    this.numbersArray = Array(70)
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

  public selezionaPostoPlatea(info: string, counter1: any, counter2: any) {
    var NumplateaRighe = counter1.toString();
    var NumplateaColonne = counter2.toString();
    var sum = NumplateaRighe+NumplateaColonne;
    for (var j = 0; j < this.bottoni.length; j++) {
      if (sum==j) {
        if(info!=''){
          document.getElementById('outputPrenotazione').innerHTML = 'Posto in Platea ' + (j+1) + ' prenotato per ' + info;
          this.bottoni[j] = info;
          this.home=undefined;
        } else {
          document.getElementById('outputPrenotazione').innerHTML = 'Casella Nome vuoto';
        }
      }
    }
  }

  public selezionaPostoPalchi(info: string, counter1: any, counter2: any,) {
    var NumpalchiRighe = counter1.toString();
    var NumpalchiColonne = counter2.toString();
    var sum = NumpalchiRighe+NumpalchiColonne;
    for (var j = 0; j < this.bottoni1.length; j++) {
      if (sum==j) {
        if(info!=''){
          document.getElementById('outputPrenotazione').innerHTML = 'Posto sul Palco ' + (j+1) + ' prenotato per ' + info;
          this.bottoni1[j] = info;
          this.home=undefined;
        }
        else{
          document.getElementById('outputPrenotazione').innerHTML = 'Casella Nome vuoto';
        }
      
    }
  }

  EntryDatabase(key: string) {
    if (key == '6a435159') {
      document.getElementById('output').innerHTML = 'chiave corretta';
      this.div = key;
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

  clean() {
    this.div=undefined;
    this.home='';
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