import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {
    name: "Teste",
    type: "Alguma coisa",
    age: 10,
  }

  animalDetails = '';
  //O serviço deve ser inicializado dentro do construtor
  constructor(private listService: ListService) { 
    this.getAnimals();
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals():void {
    // O .subscribe foi utilizado pois o evento está sendo observado
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
