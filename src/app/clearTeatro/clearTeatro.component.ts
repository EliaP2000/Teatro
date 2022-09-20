import { Component } from '@angular/core';

@Component({
  selector: 'clearTeatro',
  templateUrl: './clearTeatro.component.html',
  styleUrls: ['./clearTeatro.component.css']
})

export class clearTeatro_component {
  div: string;
  home: string = "";
  clean() {
    this.div=undefined;
    this.home='';
  }
  cleanTeatro(){
    for (var j = 0; j < this.bottoni.length; j++) {
      this.bottoni[j] = j;
    }
    for (var j = 0; j < this.bottoni1.length; j++) {
      this.bottoni1[j] = j;
    }
  }
}