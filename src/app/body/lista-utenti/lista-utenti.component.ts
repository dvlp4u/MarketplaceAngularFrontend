import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { UtentiService } from 'src/app/utenti.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  utenti : Utente[];

  constructor(private utenteService : UtentiService) { }

  ngOnInit(): void {
    this.utenteService.getUtenti()
      .subscribe( response => {this.utenti = response})
  }

}
