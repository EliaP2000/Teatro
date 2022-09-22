import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { add_nome_component } from './add_nome/add_nome.component';
import { accessTeatro_component } from './accessTeatro/accessTeatro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, add_nome_component, accessTeatro_component ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
