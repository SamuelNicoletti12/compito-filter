import { Injectable } from '@angular/core';
import { OGGETTI } from '../data/oggetti';
import { Oggetto } from '../models/modello';


@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor() { }

  getOggetti() {
    return OGGETTI as unknown as Oggetto[];
  }

}
