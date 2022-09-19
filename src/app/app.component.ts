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
  div: string;
  home: string = "";
  constructor() {
    this.bottoni = Array(70)
      .fill(0)
      .map((x, i) => i + 1);
    this.bottoni1 = Array(24)
      .fill(0)
      .map((x, i) => i + 1);
  }

  EntryDatabase(key: string) {
    if (key == '6a435159') {
      var conn = this.getValue(key);
      conn = this.setValue(key);
      this.div = key;
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