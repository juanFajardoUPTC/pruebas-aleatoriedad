import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as formulajs from '@formulajs/formulajs'

@Component({
  selector: 'app-prueba-medias',
  templateUrl: './prueba-medias.component.html',
  styleUrls: ['./prueba-medias.component.scss']
})
export class PruebaMediasComponent implements OnInit,OnChanges {

  aceptacion = ''
  alfa = ''
  n = 0
  promedio = 0
  op = 0
  z = 0
  li = 0
  ls = 0
  cumple = ''

  validando = false

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
    let auxAceptacion = this.getPorcentaje(this.aceptacion)
    let auxAlfa = this.getPorcentaje(this.alfa)

    this.promedio = formulajs.AVERAGE(...this.listaNumeros)

    this.op = 1 - (auxAlfa/2)

    this.z = formulajs.NORMSINV(this.op)

    let sqrt = 1/Number(formulajs.SQRT(12*this.n))
    this.li = 0.5-(this.z*(sqrt))
    this.ls = 0.5+(this.z*(sqrt))

    if(this.promedio>=this.li && this.promedio<=this.ls)
    this.cumple = 'VERDADERO'
    else
    this.cumple = 'FALSO'

    console.log(auxAceptacion);
    console.log(auxAlfa);
    console.log(this.n);
    console.log(this.promedio);
    console.log(this.op);
    console.log(this.z);


  }

  getPorcentaje(num:string){
let res = parseFloat(num) * (1/100)

return res

  }

}
