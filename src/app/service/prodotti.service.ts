import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Prodotto } from '../model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http : HttpClient) { }

  getProdotti() : Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>("http://localhost:8080/rest/prodotti");
  }

  getDettaglioProdotto(id : number) : Observable<Prodotto>{
    return this.http.get<Prodotto>("http://localhost:8080/rest/prodotti/"+id);
  }

  getProdottoByCategory(category : string) : Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>("http://localhost:8080/rest/prodotti/category/"+category);
  }
}
