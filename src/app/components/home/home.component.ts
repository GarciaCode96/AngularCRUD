import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPersonas: string[];

  constructor() {
    this.listaPersonas = [
      'Alejandro Ramos',
      'Fernanda Fuentes',
      'Daniela Flores',
      'Ramón Díaz',
      'Alicia García'
    ];
  }

  ngOnInit() {
  }

}
