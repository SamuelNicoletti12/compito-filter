import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottoDettaglioComponent } from './components/prodotto-dettaglio/prodotto-dettaglio.component';
import { CreazioneListaComponent } from './components/creazione-lista/creazione-lista.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdottoDettaglioComponent,
    CreazioneListaComponent,
    PreferitiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
