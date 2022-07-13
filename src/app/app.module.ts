import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeatroComponent } from '../teatro/teatro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TeatroComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
