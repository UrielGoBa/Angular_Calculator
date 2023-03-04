import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  operando_A = 0;
  operando_B = 0;
  resultado = 0;

  sumar(){

    this.resultado = this.operando_A + this.operando_B;

  }


}
