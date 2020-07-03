import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './body/home/home.component';
import { ListaUtentiComponent } from './body/lista-utenti/lista-utenti.component';
import { LoginComponent } from './body/login/login.component';
import { ListaProdottiComponent } from './body/lista-prodotti/lista-prodotti.component';
import { DettaglioProdottoComponent } from './body/dettaglio-prodotto/dettaglio-prodotto.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path: "utenti", component:ListaUtentiComponent},
  {path: "login", component:LoginComponent},
  {path: "prodotti", component:ListaProdottiComponent},
  {path: "prodotti/dettaglio-prodotto/:id", component:DettaglioProdottoComponent},
  {path: "prodotti-category/:category", component:ListaProdottiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
