import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as formulajs from '@formulajs/formulajs'

@Component({
  selector: 'app-prueba-varianza',
  templateUrl: './prueba-varianza.component.html',
  styleUrls: ['./prueba-varianza.component.scss']
})
export class PruebaVarianzaComponent implements OnInit {

  aceptacion = ''
  alfa = ''
  n = 0
  promedio = 0
  varianza = 0
  alfaDiv = 0
  opVar = 0
  xalfaDiv = 0
  xopVar = 0
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

    this.varianza = formulajs.VAR.S(...this.listaNumeros)

    this.alfaDiv = auxAlfa/2

    this.opVar = 1 - this.alfaDiv

    this.xalfaDiv = formulajs.CHIINV(this.alfaDiv,this.n - 1)
    this.xopVar = formulajs.CHIINV(this.alfaDiv,this.n + 1)


    this.li = this.xalfaDiv/(12*(this.n - 1))
    this.ls = this.xopVar/(12*(this.n - 1))

    if(this.varianza>=this.li && this.varianza<=this.ls)
    this.cumple = 'VERDADERO'
    else
    this.cumple = 'FALSO'


  }

  getPorcentaje(num:string){
let res = parseFloat(num) * (1/100)

return res

  }

}
