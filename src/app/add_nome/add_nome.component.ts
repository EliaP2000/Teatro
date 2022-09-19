import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app_add_nome',
  templateUrl: './add_nome.component.html',
  styleUrls: ['./add_nome.component.css']
})

export class add_nome_component {
  @Output() aggiungi_nome_event = new EventEmitter<string>();

  constructor() { }

  nuovoNominativo(nominativo: string) {
    this.aggiungi_nome_event.emit(nominativo);
  }
}