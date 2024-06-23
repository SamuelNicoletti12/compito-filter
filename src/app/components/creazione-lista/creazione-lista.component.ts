import { Component, OnInit } from '@angular/core';
import { Oggetto } from '../../models/modello';
import { ServiziService } from '../../servizi/servizi.service';

@Component({
  selector: 'app-creazione-lista',
  templateUrl: './creazione-lista.component.html',
  styleUrl: './creazione-lista.component.css'
})
export class CreazioneListaComponent {
  oggetti: Oggetto[] = []

  constructor(private ss: ServiziService) {

  }

  ngOnInit(): void {
    this.oggetti = this.ss.getOggetti()

  }
}
