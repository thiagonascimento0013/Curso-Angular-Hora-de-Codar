import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Componente pai
  //Compartilhar os dados para o filho através da criação de variáveis
  userName = "Gael";

  userData = {
    email: "gael@gmail.com",
    role: "Admin"
  }

  title = 'angular-hora-de-codar';
}
