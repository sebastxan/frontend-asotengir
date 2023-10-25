import { Component, Input, OnInit, TemplateRef, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CellComponent, RowComponent, TabulatorFull } from 'tabulator-tables';
import { CommonsService } from '../../services/commons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from "../../../../../../../environments/environment"
import { VentanaGenericaComponent } from '../../../ventana-generica/component/ventana-generica/ventana-generica.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import * as _ from 'lodash';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.scss']
})

export class TablaGenericaComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() configuracion: any[] = []
  // @Input() temp: any[] = []
  conf: any[] = []
  showCloseButton:boolean
  conf2: any
  tituloVentana: string;
  datosMulti: any[][] = [[]]
  modelo: any[] = [];
  baseApi: string = environment.apiEndpoint
  row: RowComponent
  tablaDatos: any[]
  tabla: any

  //data2: any[];
  columName: string;
  tituloBoton: string;
  link: string[] = [];
  nombreTabla: string
  tablaGenerica: any;
  subTablas: any
  private subTablasPorFila: { [filaIndex: number]: TabulatorFull } = {};
  tab = document.createElement('div');

  constructor(private service: CommonsService, public dialog: MatDialog, private modalService: NgbModal) {
  }
  ngAfterViewInit() {
    this.nombreTabla = this.configuracion[0].nomTabla

    const elementoTabla = document.getElementById(this.nombreTabla);
    if (elementoTabla) {
      // El elemento existe en el DOM, puedes realizar las operaciones necesarias
      elementoTabla.appendChild(this.tab);
    } else {
      console.error(`No se encontró el elemento con el id ${this.nombreTabla}`);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log()
    this.nombreTabla = this.configuracion[0].nomTabla
    this.dibujarTabla();
  }
  ngOnInit() {
    this.nombreTabla = this.configuracion[0].nomTabla
    this.showCloseButton=this.configuracion[0].boton
    this.tituloVentana = this.configuracion[0].tituloventana
    this.link[0] = this.baseApi + this.configuracion[0].link["consulta"]
    this.tituloBoton = this.configuracion[0].tituloBoton

  }

  dibujarTabla(): void {
    var self = this;
  
    var subTabla: any[] = [];
    this.conf = this.configuracion
    this.conf2 = this.configuracion[1]
    var columName = this.configuracion[0].columName;

    var colum: any = { columns: this.configuracion[0].columns }
    var colum2: any;
    if (columName != null) {
      colum2 = { columns: this.configuracion[1].columns }
    }


    this.tablaGenerica = new TabulatorFull(this.tab, {
      height: "500px",
      layout: "fitData",
      pagination: true,
      locale: true,
      langs: self.lang(this.configuracion[0].leerTabla),
      headerVisible: true,
      movableRows: false,
      ajaxURL: this.link,
      paginationButtonCount: 3,
      reactiveData: true,
      paginationSize: 10,
      paginationSizeSelector: [3, 6, 8, 10, 30],
      ...colum,
      rowFormatter: function (row) {
        if (columName != null) {
          // Obtener el índice de la fila actual en la tabla principal.
          // var filaIndex = filasTabla.findIndex((fila) => fila === row);
          var holderEl = document.createElement("div");
          var tableEl = document.createElement("div");
          tableEl.style.display = "none"
          holderEl.style.boxSizing = "border-box";
          //  holderEl.style.padding = "10px 30px 10px 10px";
          holderEl.style.padding = "5px 10px 5px 5px"
          holderEl.style.borderTop = "1px solid #333";
          holderEl.style.borderBottom = "1px solid #333";
          tableEl.style.border = "1px solid #333";
          holderEl.appendChild(tableEl);
          row.getElement().appendChild(holderEl);
          var subTabla = new TabulatorFull(tableEl, {
            layout: "fitData",
            reactiveData: true,
            width: "50px",
            data: row.getData()[columName],
            ...colum2,
            rowFormatter: function (row) {
              const clickHandler = function (event) {
                var clickedElement = event.target;
                if (clickedElement instanceof HTMLElement) {
                  var cellElement = clickedElement.closest(".tabulator-cell");
                  
                }
                if (cellElement != null) {
                  if (cellElement.getAttribute("tabulator-field") == "Editar2") {
                    self.editarRegistro(1, row, 1, subTabla, columName)
                  }
                  if (cellElement.getAttribute("tabulator-field") == "asignar") {
                    console.log(row)

                    self.modificarAsignacion(1, row)

                  }
                  if (cellElement.getAttribute("tabulator-field") == "Eliminar2") {
                    console.log(row)

                    self.eliminarRegistro(1, row)

                  }
                }
              }
              row.getElement().addEventListener("click", clickHandler)
            }
          });
        }
        const clickHandler = function (event) {
          var clickedElement = event.target;
          if (clickedElement instanceof HTMLElement) {
            var cellElement = clickedElement.closest(".tabulator-cell");
          }
          if (cellElement != null) {
            if (cellElement.getAttribute("tabulator-field") == "Editar") {
              self.editarRegistro(0, row, 1, subTabla, columName)
            }
            if (cellElement.getAttribute("tabulator-field") == "Agregar") {
              self.agregarRegistro(1, row, 0, columName)
              console.log(row.getData()," la traza")
              self.expandirEditar(row, tableEl);

            }
            if (cellElement.getAttribute("tabulator-field") == "Crear") {
              self.agregarRegistro(1, row, 0, columName)
              console.log(row.getData()," la traza")
              self.expandirEditar(row, tableEl);

            }
            if (cellElement.getAttribute("tabulator-field") == "Asignar") {
              self.editarRegistro(1, row, 1, subTabla, columName);
              self.expandirEditar(row, tableEl);
            }
            if (cellElement.getAttribute("tabulator-field") == "Eliminar") {
              alert("llego")
              self.eliminarRegistro(0, row)
            }
            if (cellElement.getAttribute("tabulator-field") == "expandir") {
              self.expandir(row, tableEl)
            }
          }
        }
        row.getElement().addEventListener("click", clickHandler)
      },


    })

  }
  cargarLangsDesdeArchivo(): any {
    // Realiza una solicitud HTTP para obtener el archivo langs.json
    // Esta es una forma genérica, y el método exacto depende de tu entorno y herramientas utilizadas.
    fetch("../../../../../../../assets/langs.json")
      .then(response => response.json())
      .then(langsFromFile => {
        // Asigna el objeto leído al objeto langs existente
        console.log(langsFromFile, "  ", this.tablaGenerica);
        //     this.tablaGenerica.setLocale(langsFromFile)
        return langsFromFile;

      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  }

  agregarRegistro(tipo: number, cell: RowComponent, estado: number, columName: any): any {
    const modalRef = this.modalService.open(VentanaGenericaComponent);
    this.reset(tipo);
    alert("llego")
   if (!this.configuracion[tipo].primaryTable) {
      // const payload= this.configuracion[tipo].payload
      this.configuracion[tipo].payload[this.configuracion[tipo].idForaneo]=cell.getData().id
      this.configuracion[tipo][this.configuracion[tipo].objeto]={[this.configuracion[tipo].payload[this.configuracion[tipo].idForaneo]]:cell.getData().id}
     // console.log( this.configuracion[tipo].payload," la paloaddddd")
     // console.log("entro "+ this.configuracion[tipo].payload[this.configuracion[tipo].objeto], this.configuracion[tipo].objeto,this.configuracion[tipo].idForaneo,"  ",cell.getData().id)
   //  this.configuracion[tipo].payload[this.configuracion[tipo].objeto] = { [this.configuracion[tipo].idForaneo]: cell.getData().id }
    // console.log(this.configuracion[tipo].payload[this.configuracion[tipo].objeto]," ok")
    }
   // this.configuracion[tipo].payload["tipo"]=false
  //  console.log( this.configuracion[tipo].payload," la estoy enviando");
    modalRef.componentInstance.data = this.configuracion[tipo];
    this.procesoAsync(modalRef, tipo, estado, "0")
      .then(response => {
        if (tipo == 0) {
          this.tablaGenerica.addRow(response[0]);
        } else {
          const datosActuales = this.tablaGenerica.getRow(cell.getData().id).getData();
          const foraneo=this.configuracion[tipo]
          response[0][foraneo.idForaneo]=response[0][foraneo.objeto][foraneo.idForaneo]
          datosActuales[columName].push(response[0])
        }
      })
      .catch(error => {
        // Manejar el error aquí
      });


  }
  public asinarRegistro(tipo: number, row: RowComponent, estado, subTabla: any) {
    /* console.log(cell.getData().addRow({"id":5,"nomFacultad":cell.getData().nomSede}),"  la data")
     cell.getTable().addRow({"id":5,"nomFacultad":cell.getData().nomSede})
     const modalRef = this.modalService.open(VentanaGenericaComponent);
     modalRef.componentInstance.service = this.service;
     this.configuracion[tipo].payload = { ...cell.getData() }
     modalRef.componentInstance.data = this.configuracion[tipo];*/
    var nuevaFilaData = { id: 5, "nomFacultad": "valor2", /* ... */ };
    /* if (subTabla) {
       // Obtener la posición de la fila actual en la tabla principal.
       var posicionFilaActual = row.getPosition(true);
       console.log(posicionFilaActual," pos fila actaul")
       // Obtener todas las filas de la subtabla.
       var filasSubtabla = subTabla.getRows();
       subTabla.addRow(nuevaFilaData, posicionFilaActual);
       // Verificar que posicionFilaActual es un número válido antes de usar el operador >=.
       if (typeof posicionFilaActual === 'number' && posicionFilaActual >= 0 && posicionFilaActual < filasSubtabla.length) {
         // Insertar la nueva fila en la posición de la fila actual en la subtabla.
         subTabla.addRow(nuevaFilaData, posicionFilaActual);
         // Actualizar la subtabla para que muestre la nueva fila.
         subTabla.redraw(true);
       }
     
   }*/
    var posicion = row.getPosition()
    subTabla.addRow(nuevaFilaData, posicion)

    //console.log(subTable," vixit")


  }
  public editarRegistro(tipo: number, cell: RowComponent, estado, subTabla: any, columName: string): any {
    const modalRef = this.modalService.open(VentanaGenericaComponent);
    modalRef.componentInstance.service = this.service;
    this.configuracion[tipo].payload = { ...cell.getData() }
    console.log(this.configuracion[tipo].payload," id foraneo 1")
    if (!this.configuracion[tipo].primaryTable) {
      alert("entro aquiiiiii");
      var foraneo=this.configuracion[tipo]
      

    console.log(this.configuracion[tipo].objeto," jaimito") 
        //console.log(this.configuracion[tipo].payload[this.configuracion[tipo].objeto][this.configuracion[tipo].objeto[this.configuracion[tipo].idForaneo]]," id foraneo2")
    //  this.configuracion[tipo].payload[this.configuracion[tipo].idForaneo]=cell.getData()[this.configuracion[tipo].idForaneo]
      console.log(this.configuracion[tipo].payload," id foraneo3")
      // this.configuracion[tipo].payload[this.configuracion[tipo].objeto] = { [this.configuracion[tipo].idForaneo]: cell.getData().id }
    }
    modalRef.componentInstance.data = this.configuracion[tipo];
    this.procesoAsync(modalRef, tipo, estado, cell.getData().id)
      .then(response => {
        console.log(response, "la respuesta esta aqui")
        if (this.configuracion[tipo].asignar) {
          const nuevaFacultad = { nomFacultad: 'nueva facultad', id: 4 };
          const datosActuales = this.tablaGenerica.getRow(cell.getData().id).getData();
          //datosActuales[columName].push(nuevaFacultad);
          //tablaGenerica.table.updateRow(0, datosActuales);

          const propiedad = response[1].id
          const nuevoArreglo = response[0][response[1].objeto].map(objeto => {
            objeto[this.configuracion[tipo].idForaneo] = cell.getData().id
            const { [propiedad]: id, ...restoObjeto } = objeto;
            return { id, ...restoObjeto };
          });
          datosActuales[columName].splice(0, datosActuales[columName].length, ...nuevoArreglo);
        } else {
          console.log("por fin",this.configuracion[tipo].payload)
          var cells = cell.getCells();
          cells.forEach(function (cell) {
            var currentValue = cell.getField();
            cell.setValue(response[0][currentValue]);
          });
        }
        
      })
      .catch(error => {
        // Manejar el error aquí
      });

  }
  public eliminarRegistro(tipo: number, cell: RowComponent) {
    console.log(cell.getData(), " ", tipo)
    this.elimnarAsync(tipo, cell.getData().id).then(result => {
      if (result) {
        cell.delete()
      } else {
        console.log("no se puede eliminar", result)
      }

    });



  }
  async elimnarAsync(tipo: number, id: string): Promise<boolean> {
    var response: any
    try {
      if (tipo == 0) {
        response = await this.service.eliminar(id, this.configuracion[tipo].link["save"]).toPromise();
      } else {
        response = await this.service.eliminar(id, this.configuracion[tipo].link["save"]).toPromise();
      }
      console.log(response, " la respuesta >>>>>>>>>>>>>>>>>>>>>>>>")
      return true;
    } catch (error) {

      return false
    }
  }
  async procesoAsync(modalRef: any, tipo, estado, id: string): Promise<any> {
    try {
      var result = await modalRef.result;
      var response: any
      var valor: string
      if (estado == 0) {

        if (tipo == 1) {
          if (this.configuracion[tipo].primaryTable) {
            /* var data: any = this.configuracion[tipo].form[this.configuracion[tipo].form.length - 1]
             data.relacion[data.objeto] = { [data.id]: id }
            console.log(data, " relacion")
 
            result[1] = Object.assign(result[1], data.relacion)*/
          } else {

            /* result[1] = Object.assign(result[1], id)
             console.log(result[1]," todos")*/
          }

        }
        console.log(result," Andrea",this.configuracion[tipo].link["save"],"   ",this.configuracion[tipo])
        response = await this.service.crear(result[0], this.configuracion[tipo].link["save"]).toPromise();
        var idAlias = this.configuracion[tipo].form[this.configuracion[tipo].form.length - 1].idAlias;
        valor = response[idAlias]; // Guarda el valor de la clave existente
        result[0].id = valor;
        return result

      } else {
        console.log(result, " el puto resultado")
       
          response = await this.service.editar(result[0], this.configuracion[tipo].link["save"], id).toPromise();
        


      }

      return result;
    } catch (error) {

      if (error.length != 0)
        throw error;
    }
  }
  public modificarAsignacion(tipo: number, cell: RowComponent) {
    console.log("mjor", this.configuracion[tipo].payload)

    var editar = Object.assign({}, { [this.configuracion[1].idForaneo]: "0" }, { [this.configuracion[1].objeto]: [{ [this.configuracion[1].idAlias]: cell.getData().id }] })
    console.log(editar, " jaime")
    this.modificar(tipo, editar, cell.getData()[this.configuracion[1].idForaneo]).then(result => {
      cell.delete()
    })
  }
  async modificar(tipo: number, data: any, id): Promise<boolean> {
    try {
      await this.service.editar(data, this.configuracion[tipo].link["save"], id).toPromise();
    } catch (error) {
      return false;
    }
    return true
  }

  expandir(row: RowComponent, tableEl: any) {
    const expandField = "expandir";
    const cell = row.getCell(expandField);
    const iconElement = cell.getElement().querySelector("span");
    const newIconElement = document.createElement("span");
    newIconElement.classList.add("material-icons");
    const iconClasse = iconElement.classList.value;
    if (iconElement.textContent == "chevron_right") {
      newIconElement.textContent = "expand_more"
      cell.getElement().replaceChild(newIconElement, iconElement);
      tableEl.style.display = "block"
    } else {
      newIconElement.textContent = "chevron_right"
      cell.getElement().replaceChild(newIconElement, iconElement);
      tableEl.style.display = "none"
    }
  }
  expandirEditar(row: RowComponent, tableEl: any) {
    const expandField = "expandir";
    const cell = row.getCell(expandField);
    const iconElement = cell.getElement().querySelector("span");
    const newIconElement = document.createElement("span");
    newIconElement.classList.add("material-icons");
    const iconClasse = iconElement.classList.value;
    if (iconElement.textContent == "chevron_right") {
      newIconElement.textContent = "expand_more"
      cell.getElement().replaceChild(newIconElement, iconElement);
      tableEl.style.display = "block"
    }
  }
  async ver(url: string, id: string): Promise<any> {
    var response: any
    try {
      //   console.log(this.conf.form[posi - nivel].parametros[nivel - 1].model[this.conf.form[posi - nivel].parametros[nivel - 1].id], " el id ", this.conf.form[posi - nivel].parametros[nivel - 1].model)
      response = await this.service.ver(id, url).toPromise()

    } catch (error) {

    }


    return response
  }
  reset(tipo: number): void {
    this.configuracion[tipo].form.forEach((item) => {
      if (item.type == "select") {

      } else {
        if (!item.idAlias) {
          this.configuracion[tipo].payload[item.field] = ""
          this.configuracion[tipo].payload[item.id] = ""
          this.configuracion[tipo].payload["id"] = ""

        }

      }

    })

  }
  lang(tablaText: string): any {
    const langs: any = {
      "en-us": {
        "data": {
          "loading": tablaText, //data loader text
          "error": "Error", //data error text
        },
        "pagination": {
          "page_size": "Número de páginas",
          "page_title": "Show Page",
          "first": "Primero",
          "first_title": "First Page",
          "last": "Último",
          "last_title": "Last Page",
          "prev": "Ant",
          "prev_title": "Prev Page",
          "next": "Sig",
          "next_title": "Next Page",
          "all": "All",

        },
        "headerFilters": {
          "default": "Filtro de campo...",
          "columns": {
            "name": "filter name..."
          }
        }
      }
    }
    return langs;
  }

}
