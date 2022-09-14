import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  // Variáveis
  name: string = "Thiago";
  age: number = 28;
  job = "Desenvolvedor";
  hobies = [
    "Estudar",
    " Assistir filmes e séries",
    " Passear com os filhos"
  ]
  car = {
    name: "Honda",
    year: 2020
  }

  constructor() { }

  ngOnInit(): void {
  }

}
