import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     function mostra() {

    //   $("#loginFrame").attr("hidden", false);
       console.log("Test pulsante");
     }
  }

}
