import { Component, Input } from '@angular/core';
import { ServiziService } from '../../servizi/servizi.service';
import { Oggetto } from '../../models/modello';

@Component({
  selector: 'app-prodotto-dettaglio',
  templateUrl: './prodotto-dettaglio.component.html',
  styleUrl: './prodotto-dettaglio.component.css'
})
export class ProdottoDettaglioComponent {
  @Input()
  oggetto?: Oggetto;

  constructor(public ss: ServiziService) {

  }

}
