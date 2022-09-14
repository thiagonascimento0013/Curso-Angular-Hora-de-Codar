import { Component, OnInit, 
  //Módulo importado para receber o filho
  Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  //Recebendo o valor do componente pai
  @Input() name: string = '';
  @Input() userData!: {email: string; role: string};

  constructor() { }

  ngOnInit(): void {
  }

}
