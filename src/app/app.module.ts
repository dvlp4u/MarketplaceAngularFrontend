import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './header/menu-bar/menu-bar.component';
import { UtentiService } from './utenti.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaUtentiComponent } from './body/lista-utenti/lista-utenti.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';
import { HomeComponent } from './body/home/home.component';
import { ListaProdottiComponent } from './body/lista-prodotti/lista-prodotti.component';
import { DettaglioProdottoComponent } from './body/dettaglio-prodotto/dettaglio-prodotto.component';
import { FiltroProdottiPipe } from './service/filtro-prodotti.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuBarComponent,
    ListaUtentiComponent,
    BodyComponent,
    LoginComponent,
    HomeComponent,
    ListaProdottiComponent,
    DettaglioProdottoComponent,
    FiltroProdottiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UtentiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
