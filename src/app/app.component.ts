import { Component } from '@angular/core';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  excelData:any;
  arrayData:any[] = [];

  tiposPruebas = [
    "Prueba de Medias",
    "Prueba de Varianza",
    "Prueba KS",
    "Prueba Chi^2",
    "Prueba de Poker"
  ]

  tipoSeleccionado = "Prueba de Medias"

  ReadExcel(event:any){

    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file)

    fileReader.onload = (e) => {
      var workbook = XLSX.read(fileReader.result,{type:"binary"});
      var sheetNames = workbook.SheetNames;
      this.excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])

      this.excelData.forEach((object:any )=> {

        for (const key in object) {
          if(object.hasOwnProperty(key)) {
            var value = object[key];
            this.arrayData.push(value)
          }
        }
      });
    }

  }
  asignarTipo(event:any){
    console.log(event);

    this.tipoSeleccionado = event
  }
}
