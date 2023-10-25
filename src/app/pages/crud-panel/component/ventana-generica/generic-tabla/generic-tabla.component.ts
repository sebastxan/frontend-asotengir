import { Component, OnInit } from '@angular/core';

import { TabulatorFull } from 'tabulator-tables';


@Component({
  selector: 'app-generic-tabla',
  templateUrl: './generic-tabla.component.html',
  styleUrls: ['./generic-tabla.component.css']
})
export class GenericTablaComponent implements OnInit{
  tableOptions: any;
  panelVisible:boolean=true
  tableData: any[];
  selectedCells: any[] = [];
  tablaorigen:any
  tabladestino:any
  data1:any=[
    {id:233,nomSeccional:"Centro ggjkgk gkjgggkg gkjgjkgkjgk gkgjkgkjg jkgjgkjg ajdlajdlñjsadjsa jdlsajdlsajdlsadjñsad lñjdlsajdlsajdñlsajldñsadj ñlajdlñasjdñlsajñdjsalñdjsalñd",nomPais:"jjjj"},
    {id:456,nomSeccional:"Centro1",nomPais:"Colombia1"},
    {id:98,nomSeccional:"Centro2",nomPais:"Colombia2"},
    {id:56,nomSeccional:"Centro3",nomPais:"Colombia3"},

  ]
  data2:any=[
    

  ]
 colum:any={columns: [
    { title: "Nombre Seccional", field: "nomSeccional",headerFilter: "input", headerSort: "Nombre de la Tabla Origen", tooltip: true,formatter: this.textareaFormatter,
    cellClick: this.onCellClick
         
  },
    { title: "nombre pais", field: "nomPais", headerFilter: "input" },
    { title: "Nombre Seccional", field: "nomSecciona",headerFilter: "input", headerSort: "Nombre de la Tabla Origen" },
    
  
  

  ],
}
  colum2:any= [
    { title: "Nombre Seccional", field: "nomSeccional",headerFilter: "input", headerSort: "Nombre de la Tabla Origen" },
    
  
  

  ]
  ngOnInit(): void {
    alert("entro a tabla generaica")
    var titulo="Nombre Seccional"
    var campo="nomSeccional"
    var titulo1="nombre pais"
    var campo1="nomPais"
     this.tablaorigen = new TabulatorFull("#tabla-origen", {
      height: "311px",
      
      layout: "fitData",
      pagination: true,
      
      headerVisible: true,
      movableRows:true,
      movableRowsConnectedTables:"#tabla-destino",
      movableRowsReceiver: "add",
      movableRowsSender: "delete",
      placeholder:"All Rows Moved",
      data: this.data1,
      reactiveData: true,
      paginationSize: 6,
      paginationSizeSelector: [3, 6, 8, 10, 30],
   
      ...this.colum,
   /**    cellMouseEnter: (e: any, cell: any) => {
        alert(cell.getValue());
        // Crear el tooltip utilizando ngx-tippy
        tippy(cell.getElement(), {
          content: cell.getValue(), // Contenido del tooltip (puede ser personalizado)
          allowHTML: true, // Permitir contenido HTML en el tooltip
          animation: 'scale', // Animación del tooltip
        });
      },**/
    },
    
    );
    alert("entro a tabla generaica 2")
    this.tabladestino = new TabulatorFull("#tabla-destino", {
      height: "311px",
      layout: "fitData",
      pagination: true,
      data: this.data2,
      reactiveData: true,
      movableRows:true,
      movableRowsConnectedTables:"#tabla-origen",
      movableRowsReceiver: "add",
      movableRowsSender: "delete",
      placeholder:"All Rows Moved",
      paginationSize: 6,
      paginationSizeSelector: [3, 6, 8, 10, 30],
   
      columns: [...this.colum2]
    });
    var filaSeleccionada = null; // variable para almacenar la fila seleccionada
/*
    this.tablaorigen.addListener("rowClick", function(e, fila) {
    alert("entro")
    if (filaSeleccionada === null) {
        fila.toggleSelect(); // seleccionar la fila si no hay ninguna seleccionada
        filaSeleccionada = fila; // almacenar la fila seleccionada
    } else if (fila === filaSeleccionada) {
        fila.deselect(); // deseleccionar la fila si se hace clic en la misma fila seleccionada
        filaSeleccionada = null; // restablecer la variable de fila seleccionada
    } else {
        filaSeleccionada.deselect(); // deseleccionar la fila previamente seleccionada
        fila.toggleSelect(); // seleccionar la nueva fila
        filaSeleccionada = fila; // actualizar la variable de fila seleccionada
    }
})*/
  
   // const selectedRows = TabulatorFull.prototype.getSelectedRows.call(tablaorigen);
    
   /* TabulatorFull.prototype.deleteRow.call(tablaorigen, selectedRows);
    TabulatorFull.prototype.addRow.call(tabladestino, selectedRows);
    */
  }

opten(){
  var dataReceiver = this.tabladestino.getData();

  // Imprimir los datos en la consola
  console.log(dataReceiver); 
} 
customTooltipFormatter(cell, formatterParams, onRendered) {
  var words = cell.getValue().split(' ');
  var paragraphs = [];

  while (words.length > 0) {
    var paragraph = words.splice(0, 3).join(' ');
    paragraphs.push(paragraph);
  }

  var tooltipContent = paragraphs.map(p => `<p>${p}</p>`).join('');

  return tooltipContent;
}
textareaFormatter(cell, formatterParams, onRendered) {
 // return "<textarea rows='2' cols='30' pInputTextarea disabled>"+cell.getValue()+ "</textarea>";
  return "<textarea rows='2' cols='30' disabled>" + cell.getValue() + "</textarea>";
}

onCellClick(e, cell) {
console.log(cell.getData());
const isSelected = this.isSelectedCell(cell);

  if (this.selectedCells.includes(cell)) {
    cell.getElement().classList.remove('selected-cell');
    this.selectedCells = this.selectedCells.filter(selectedCell => selectedCell !== cell);
  } else {
    cell.getElement().classList.add('selected-cell');
    this.selectedCells.push(cell);
  }
  console.log(this.selectedCells);
   // this.toggleCellSelection(cell);
  
}

toggleCellSelection(cell) {
  alert("llego 1")
  const isSelected = this.isSelectedCell(cell);

  if (isSelected) {
    cell.getElement().classList.remove('selected-cell');
    this.selectedCells = this.selectedCells.filter(selectedCell => selectedCell !== cell);
  } else {
    cell.getElement().classList.add('selected-cell');
    this.selectedCells.push(cell);
  }
  console.log(this.selectedCells);
}

isSelectedCell(cell) {
  alert("llego 2")
  return this.selectedCells.includes(cell);
}


}
