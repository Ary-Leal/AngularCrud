import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioContatoComponent } from './formulario-contato/formulario-contato.component';

import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { DeletaContatoComponent } from './deleta-contato/deleta-contato.component';
import { CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDatabase} from "./in-memory-database";


@NgModule({
  declarations: [
    AppComponent,
    FormularioContatoComponent,
    ListaContatosComponent,
    DeletaContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
