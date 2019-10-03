import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tituloNavbar: string;
  itemHome: string;
  itemSecundario: string;

  constructor() {
    this.tituloNavbar = 'Usuarios';
    this.itemHome = 'Home';
    this.itemSecundario = 'Crear';
  }

  ngOnInit() {
  }
}
