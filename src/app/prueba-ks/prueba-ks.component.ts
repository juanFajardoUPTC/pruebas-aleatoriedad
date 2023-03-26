import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as formulajs from '@formulajs/formulajs'


@Component({
  selector: 'app-prueba-ks',
  templateUrl: './prueba-ks.component.html',
  styleUrls: ['./prueba-ks.component.scss']
})
export class PruebaKSComponent implements OnInit {

  n = 0
  promedio = 0
  minimo = 0
  maximo = 0
  dmax = 0
  dmaxp = 0
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

    this.n = formulajs.COUNT(...this.listaNumeros)

    this.promedio = formulajs.AVERAGE(...this.listaNumeros)

    this.minimo = formulajs.MIN(...this.listaNumeros)
    this.maximo = formulajs.MAX(...this.listaNumeros)

    for (let index = 0; index < 10; index++) {

      if(index == 0){
        let ls = this.minimo +((this.maximo-this.minimo)/10)
        let row = [index+1,this.minimo,ls]

        this.tabla.push(row)
      }
      else
      {
        let li = this.tabla[index-1][2]
        let ls = li +((this.maximo-this.minimo)/10)
        let row = [index+1,li,ls]

        this.tabla.push(row)
      }

    }

    //FREC OBT y CORR
    for (let index = 0; index < this.tabla.length; index++) {
      const elementTabla = this.tabla[index];
      let contador = 0

      for (let index2 = 0; index2 < this.listaNumeros.length; index2++) {
        const elementLista = this.listaNumeros[index2];
        if(elementTabla[1] <= elementLista && elementTabla[2] > elementLista)
        contador++
      }
      this.tabla[index].push(contador)
      this.tabla[index].push(contador)


    }

    //F:OBT:A
    for (let index = 0; index < this.tabla.length; index++) {
      if(index == 0){
        this.tabla[index].push(this.tabla[index][4])
      }
      else{
        let op = this.tabla[index-1][5]+this.tabla[index][4]
        this.tabla[index].push(op)

      }

    }

    //P:OBT
    for (let index = 0; index < this.tabla.length; index++) {
      let op = this.tabla[index][5]/this.n
      this.tabla[index].push(op)

    }

    //F.ESP.A
    for (let index = 0; index < this.tabla.length; index++) {
      if(index == 0){

        let op = this.n/10
        this.tabla[index].push(op)

        let op2 = 1/10
        this.tabla[index].push(op2)

      }
      else{
        let op = this.tabla[index-1][7]+this.tabla[0][7]
        this.tabla[index].push(op)

        let op2 = this.tabla[index-1][8]+this.tabla[0][6]
        this.tabla[index].push(op2)

      }

    }

    //DIF
    for (let index = 0; index < this.tabla.length; index++) {
      let op = formulajs.ABS(this.tabla[index][8] - this.tabla[index][6])
      this.tabla[index].push(op)

    }


    let auxDMAX = this.tabla.map((n:any)=>n[9])
    this.dmax = formulajs.MAX(auxDMAX)


    if(this.dmax < this.dmaxp)
    this.cumple = 'VERDADERO'
    else
    this.cumple = 'FALSO'


  }


}
