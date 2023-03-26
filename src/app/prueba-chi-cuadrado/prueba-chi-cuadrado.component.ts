import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as formulajs from '@formulajs/formulajs'

@Component({
  selector: 'app-prueba-chi-cuadrado',
  templateUrl: './prueba-chi-cuadrado.component.html',
  styleUrls: ['./prueba-chi-cuadrado.component.scss']
})
export class PruebaChiCuadradoComponent implements OnInit {

  aceptacion = ''
  alfa = ''
  n = 0
  m = 0
  sumatoria = 0
  estadisticoChi = 0
  cumple = ''

  validando = false

  tabla:any = []

  @Input() listaNumeros!: any;

  constructor() { }

  ngOnInit(): void {

    //formulajs.ch
    console.log(this.listaNumeros);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.listaNumeros);

  }

  generarValidacion(){

this.validando = true
let auxAceptacion = this.getPorcentaje(this.aceptacion)
let auxAlfa = this.getPorcentaje(this.alfa)

    this.n = formulajs.COUNT(...this.listaNumeros)
    this.m = Number(formulajs.SQRT(this.n))

    let intervalo = 1/this.m


    for (let index = 0, li = 0.0,ls = intervalo; ls <= 1; index++, li=li+intervalo, ls=ls+intervalo) {

      let row = [index+1,li,ls]
      this.tabla.push(row)


    }

    //FREC OBT y FREC ESP
    for (let index = 0; index < this.tabla.length; index++) {
      const elementTabla = this.tabla[index];
      let contador = 0

      for (let index2 = 0; index2 < this.listaNumeros.length; index2++) {
        const elementLista = this.listaNumeros[index2];
        if(elementTabla[1] <= elementLista && elementTabla[2] > elementLista)
        contador++
      }
      this.tabla[index].push(contador)
      this.tabla[index].push(this.n/this.m)

    }



    //OPERACION DE DIFERENCIA DE FRECUENCIAS

    for (let index = 0; index < this.tabla.length; index++) {
      let op = formulajs.POWER(this.tabla[index][4] - this.tabla[index][3],2)/this.tabla[index][4]
      this.tabla[index].push(op)
      this.sumatoria = this.sumatoria + op
    }

    this.estadisticoChi = formulajs.CHISQ.INV.RT(auxAlfa,this.m - 1)


    if(this.sumatoria < this.estadisticoChi)
    this.cumple = 'VERDADERO'
    else
    this.cumple = 'FALSO'


  }
  getPorcentaje(num:string){
    let res = parseFloat(num) * (1/100)

    return res

      }


}
