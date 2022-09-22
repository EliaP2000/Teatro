import { Component, Output, EventEmitter } from '@angular/core';
import { teatro_service } from '../teatro.service';
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
  chiave_teatro: string = "";
  CHIAVE: string = '6a435159';

  @Output() modifica_div_event = new EventEmitter<string>();

  constructor(private service: teatro_service) { }

  EntryDatabase(key: string) {
    this.service.get_teatro(key).subscribe({
      next: (x: any) => {
        const prenotazione = JSON.parse(x);
        this.chiave_teatro = key;
        console.log(this.chiave_teatro);
      },
      error: (err: any) => console.error(`Errore nell'observer: ${JSON.stringify(err)}`)
    });
    this.service.set_teatro(key, this.CHIAVE).subscribe({
      next: () => {
        this.div=key;
        console.log('Ok!');
        this.modifica_div_event.emit(this.div);
      },
      error: err => console.error(`Errore nell'observer: ${JSON.stringify(err)}`)
    });
    if(key == ''){
      document.getElementById('output').innerHTML = 'chiave non inserita';
    }
    else{
      document.getElementById('output').innerHTML = 'chiave errata';
    }
  }
}