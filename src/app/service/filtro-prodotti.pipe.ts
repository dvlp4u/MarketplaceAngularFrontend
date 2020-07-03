import { Pipe, PipeTransform } from '@angular/core';
import { Prodotto } from '../model/prodotto';

@Pipe({
  name: 'filtroProdotti'
})
export class FiltroProdottiPipe implements PipeTransform {

  transform(prodotti : Prodotto[], filtro : string): Prodotto[] {

    if(!prodotti || !filtro){
      return prodotti;
    }
    return prodotti.filter(prodotti => prodotti.nome.toLowerCase().indexOf(filtro.toLowerCase()) !== -1);
  }

}
