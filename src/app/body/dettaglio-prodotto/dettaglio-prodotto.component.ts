import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodotti.service';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.css']
})
export class DettaglioProdottoComponent implements OnInit {

  id : number;
  prodotto : Prodotto;

  constructor(private route: ActivatedRoute, private prodottoService : ProdottiService) { }

  ngOnInit(): void {

    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.prodottoService.getDettaglioProdotto(this.id)
              .subscribe( response => {this.prodotto = response})

  }

}
