import { Component, Output, EventEmitter } from '@angular/core';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';

@Component({
  selector: 'app_accessTeatro',
  templateUrl: './accessTeatro.component.html',
  styleUrls: ['./accessTeatro.component.css']
})

export class accessTeatro_component {
  div: string;

  @Output() modifica_div_event = new EventEmitter<string>();

  constructor() { }

  EntryDatabase(key: string) {
    if (key == '6a435159') {
      var conn = this.getValue(key);
      conn = this.setValue(key);
      this.div = key;
      conn = this.modificaDIV();
    } else if(key == ''){
      document.getElementById('output').innerHTML = 'chiave non inserita';
    }
    else{
      document.getElementById('output').innerHTML = 'chiave errata';
    }
  }
  
  /*this.service.get_spettacolo(chiave).subscribe({
    next: (x: any) => {
      const prenotazione = JSON.parse(x);
      this.platea = prenotazione.slice(0, 7);
      this.palchetto = prenotazione.slice(7);
      this.chiave_teatro = chiave;
      this.show_el.add_nome = true;
    },
    error: (err: any) => console.error(`Errore nell'observer: ${JSON.stringify(err)}`)
  });*/

  /*this.service.set_spettacolo(key, prenotazione).subscribe({
    next: () => this.new_teatro_event.emit(key),
    error: err => console.error(`Errore nell'observer: ${JSON.stringify(err)}`)
  })*/

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

  modificaDIV() {
    this.modifica_div_event.emit(this.div);
  }
}