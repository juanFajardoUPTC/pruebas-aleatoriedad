import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as formulajs from '@formulajs/formulajs';

@Component({
  selector: 'app-prueba-poker',
  templateUrl: './prueba-poker.component.html',
  styleUrls: ['./prueba-poker.component.scss'],
})
export class PruebaPokerComponent implements OnInit {
  aceptacion = '';
  alfa = '';
  n = 0;
  m = 0;
  sumatoria = 0;
  estadisticoChi = 0;
  cumple = '';

  validando = false;

  tabla: any = [
    ['TD', 0],
    ['1P', 0],
    ['2P', 0],
    ['T', 0],
    ['FH', 0],
    ['P', 0],
    ['Q', 0],
  ];

  numerosDec = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  @Input() listaNumeros!: any;

  constructor() {}

  ngOnInit(): void {
    //formulajs.ch
    console.log(this.listaNumeros);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.listaNumeros);
  }

  generarValidacion() {
    this.validando = true;
    let auxAceptacion = this.getPorcentaje(this.aceptacion);
    let auxAlfa = this.getPorcentaje(this.alfa);

    this.n = this.listaNumeros.length;
console.log('NNNNNNNN',this.n);

    for (let index2 = 0; index2 < this.listaNumeros.length; index2++) {
      const elementLista = this.listaNumeros[index2] + '';
      let pares = 0;
      let trios = 0;
      let fullHouses = 0;
      let pokers = 0;
      let quintillas = 0;
      let numeroString = elementLista.slice(2);
      //console.log('NUM STRING', numeroString);

      for (let index = 0; index < this.numerosDec.length; index++) {
        const num = this.numerosDec[index];

        let coincidencias = this.charRepeats(num, numeroString);
        if (coincidencias == 2) pares++;
        if (coincidencias == 3) trios++;
        if (coincidencias == 4) pokers++;
        if (coincidencias == 5) quintillas++;
      }

      if (quintillas != 0) {
        this.tabla[6][1]++;
      } else if (pokers != 0) {
        this.tabla[5][1]++;
      } else if (pares != 0 && trios != 0) {
        this.tabla[4][1]++;
      } else if (trios != 0) {
        this.tabla[3][1]++;
      } else if (pares >= 2) {
        this.tabla[2][1]++;
      } else if (pares != 0) {
        this.tabla[1][1]++;
      } else {
        this.tabla[0][1]++;
      }
    }

    //AGREGANDO PROBABILIDADES CON 5 DECIMALES
    this.tabla[0].push(0.3024)
    this.tabla[1].push(0.5040)
    this.tabla[2].push(0.1080)
    this.tabla[3].push(0.0720)
    this.tabla[4].push(0.0090)
    this.tabla[5].push(0.0045)
    this.tabla[6].push(0.0001)

    //E(i)
    for (let index = 0; index < this.tabla.length; index++) {
      const element = this.tabla[index];
      let op = element[2]*this.n
      console.log(element[2],this.n);

      this.tabla[index].push(op)
    }

    //(Ei-Oi)^2/Ei
    for (let index = 0; index < this.tabla.length; index++) {
      const element = this.tabla[index];
      let op = (formulajs.POWER(element[3] - element[1],2))/element[3]
      this.tabla[index].push(op)
      this.sumatoria = this.sumatoria + op
    }

    this.estadisticoChi = formulajs.CHISQ.INV.RT(auxAlfa,6)

    if (this.sumatoria < this.estadisticoChi) this.cumple = 'VERDADERO';
    else this.cumple = 'FALSO';
  }
  getPorcentaje(num: string) {
    let res = parseFloat(num) * (1 / 100);

    return res;
  }
  charRepeats(char: string, text: string): number {
    let contador = 0;
    for (var i = 0; i <= text.length; i++) {
      if (char == text[i]) {
        contador++;
      }
    }
    return contador;
  }
}
