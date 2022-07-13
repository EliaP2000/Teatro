import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
})
export class TeatroComponent{
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
        BloccoInserimento[j].style.visibility = 'visible';
        BloccoTeatro[j].style.visibility = 'hidden';
      }
    }
  }

  public selezionaPostoPalchi(info: string, Numpalchi: any) {
    for (var j = 0; j < this.bottoni1.length; j++) {
      if (Numpalchi == j) {
        this.bottoni1[j] = info;
        //this.bottoni1[j].style.backgroundColor = "red";
        info = '';
        BloccoInserimento[j].style.visibility = 'visible';
        BloccoTeatro[j].style.visibility = 'hidden';
      }
    }
  }
}