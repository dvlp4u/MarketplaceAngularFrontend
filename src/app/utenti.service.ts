import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utente } from './model/utente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private http : HttpClient) { }

  getUtenti() : Observable<Utente[]>{
    return this.http.get<Utente[]>("http://localhost:8080/Marketplace-1.0/rest/utenti");
  }
}
