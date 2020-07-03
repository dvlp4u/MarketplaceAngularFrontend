import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottiService } from 'src/app/service/prodotti.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {

  prodotti : Prodotto[];
  filtro : string;
  category : string;

  constructor(private prodottoService : ProdottiService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    console.log(this.filtro);
    this.route.queryParams.subscribe(params => {
      this.filtro = params["filtro"];
      console.log(this.filtro);
    });

    this.route.params
      .subscribe(params => {
        this.category = params["category"];    

        if(this.category==null){
          this.prodottoService.getProdotti()
            .subscribe( response => {this.prodotti = response})
        } else {
          this.prodottoService.getProdottoByCategory(this.category)
            .subscribe( response => {this.prodotti = response} )
        }
      });
  }
}
