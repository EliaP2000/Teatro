import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { add_nome_component } from './add_nome/add_nome.component';
import { clearTeatro_component } from './clearTeatro/clearTeatro.component';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent, add_nome_component, clearTeatro_component]
})

export class AppModule { }
