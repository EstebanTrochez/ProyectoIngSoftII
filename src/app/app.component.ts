import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Taller1-login';
  public email: string;
  public clave: string;
  saludo = '';

  captura() {
    if (this.email == 'juanestebant45@gmail.com' && this.clave == '666') {
      this.saludo = 'Successful session';
    } else {
      this.saludo = 'Datos no coinciden';
    }
  }
}
