import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Router } from '@angular/router';
import { ɵKeyEventsPlugin } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodottoCercato : string;

  constructor(private router : Router) { }

  ngOnInit(): void {

  }


  cercaProdotto(){
    this.router.navigate(["/prodotti"],{queryParams:{filtro:this.prodottoCercato}})
  }
    
  verificaClick(event : KeyboardEvent){
    if(event.code === "Enter"){
        this.cercaProdotto();
    }
  }
}
