import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.scss']
})
export class ListaNumerosComponent implements OnInit {

  @Input() listaNumeros!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
