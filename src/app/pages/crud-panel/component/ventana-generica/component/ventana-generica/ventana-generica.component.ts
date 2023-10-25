import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonsService } from '../../services/commons.service';
import { ConnectableObservable } from 'rxjs';
@Component({
  selector: 'app-ventana-generica',
  templateUrl: './ventana-generica.component.html',
  styleUrls: ['./ventana-generica.component.css']
})
export class VentanaGenericaComponent implements OnInit, AfterViewInit {
  @Output() gestionResgitro: EventEmitter<any> = new EventEmitter();
  @Input() data: any;
  @Input() data2: any;
 
  loading: boolean = true
  isLoading: boolean = true
  fechaMinima: any = moment().startOf('day').toDate();
  conf: any = {}
  myProperty: boolean;
  selectedItem: any = [];
  valid: boolean = true
  form: FormGroup;
  modelo: any = {};
  dataPayload: any[] = []
  datos: any[][] = [[]]
  datos1: any = {}
  datosMulti: any[][] = [[]]
  formControls: any = {}
  ventana: string = "hola"
  constructor(private http: HttpClient, public activeModal: NgbActiveModal, private service: CommonsService, private cdRef: ChangeDetectorRef, private ngZone: NgZone) {


  }
  ngAfterViewInit() {
   // this.cdRef.detectChanges()
   /*this.cdRef.detectChanges();
      this.ngZone.runOutsideAngular(() => {
        // Realiza la lógica asíncrona aquí.
        this.cdRef.markForCheck();
        alert("la luz dela vida")
        //this._cdr.detectChanges();
        // Cuando la lógica asíncrona haya finalizado, marca manualmente el componente para una nueva detección de cambios.
        ;
        alert("la luz dela vida2")
      });
    */ 
  }
  ngOnInit(): void {
    this.myProperty = true;
    this.conf = this.data
    
    this.ventana = this.conf.tituloVentana
   
    console.log(this.conf.payload," ña carga util")
    for (const item of this.conf.form) {
      if (item.type == "select") {
        item.parametros.forEach(async (dat) => {
       
          this.modelo[dat.id] = this.conf.payload[dat.id];
          this.modelo[dat.field] = this.conf.payload[dat.field];;
          dat.model[dat.field] = this.conf.payload[dat.field]
         
          dat.model[dat.id] = this.conf.payload[dat.id]
        
          this.formControls[dat.field] = new FormControl(this.conf.payload[dat.field], [Validators.required]);
          if (dat.nivel == 0) {
            this.leer(dat.urlOrigen, dat.nivel, dat.posi).then(result => {
              this.datos[dat.posi] = result;
             
              if (!dat.model[dat.id]) {
                dat.model = this.datos[dat.posi][0]
              }
              this.conf.form[dat.posi - dat.nivel].parametros.forEach((par, i) => {
                //  var size=this.conf.form[dat.posi - dat.nivel].parametros.length
                // this.lectura(par.urlOrigen, par.nivel, par.posi,size,par.model)
                console.log(par.urlOrigen," el puto url")
                this.leer(par.urlOrigen, par.nivel, par.posi).then(result => {
                  if (i > 0) {
                    if (i == 1) {
                      this.datos[par.posi] = result
                      
                      if (!par.model[dat.id]) {
                        console.log(par.model," el modelo")
                        par.model = this.datos[par.posi][0]
                      }
                    }
                    this.conf.form[dat.posi - dat.nivel].parametros.forEach((par, i) => {
                      if (i > 1) {

                        //    console.log(i, " la i")
                        //  var size=this.conf.form[dat.posi - dat.nivel].parametros.length
                        // this.lectura(par.urlOrigen, par.nivel, par.posi,size,par.model)
                        if (i == 2) {
                          this.leer(par.urlOrigen, par.nivel, par.posi).then(result => {
                            if (result) {
                              this.datos[par.posi] = result
                              if (!par.model[dat.id]) {
                                par.model = this.datos[par.posi][0]
                              }
                            }

                          })
                        }
                      }
                    })
                  }

                })

              })


            })
          }
        });
      } else if (item.type == "date-range") {
        this.modelo[item.field.fecha1] = this.conf.payload[item.field.fecha1];
        this.modelo[item.field.fecha2] = this.conf.payload[item.field.fecha2];
        this.modelo[item.id] = this.conf.payload[item.id]
        this.formControls[item.field.fecha1] = new FormControl(this.conf.payload[item.field.fecha1], [Validators.required, Validators.min(this.fechaMinima)]);
        this.formControls[item.field.fecha2] = new FormControl(this.conf.payload[item.field.fecha1], [Validators.required, Validators.min(this.fechaMinima)]);
      } else if (item.type == "multiSelect") {
        for (const dat of item.parametros) {
          //console.log(this.conf, " llegaron los putos datos", dat.datos)

          /*item.parametros.forEach(async (dat) => {*/

          this.modelo[dat.id] = this.conf.payload[dat.id];
          this.modelo[dat.field] = this.conf.payload[dat.field];
          this.ver(dat.urlOrigen, this.conf.payload.id).then(result => {
            dat.datos = result.Model
            this.datos[dat.posi] = result.List
          })
          this.formControls[dat.field] = new FormControl(this.conf.payload[dat.field], [Validators.required]);
        

        }



      }
      else {
        if (!item.idAlias) {
          this.modelo[item.field] = this.conf.payload[item.field];
          this.modelo[item.id] = this.conf.payload[item.id]

          this.formControls[item.field] = new FormControl(this.conf.payload[item.field], [Validators.required]);
          if (item.disabled) {
            this.formControls[item.field].disable();
          }

        }
      }

    }
    this.form = new FormGroup(this.formControls)
  }
  lectura(url: string, nivel: number, posi: number, size: number, model: any) {
    console.log("entro recursivo", posi, " ", size)
    if (posi < size) {
      // console.log("entro recursivo")
      this.leer(url, nivel, posi).then(result => {
        this.datos[posi] = result
        console.log(model, "conf")
        model = this.datos[posi][0]
        console.log(model, "conf >>>>>><")

      })
      posi++;
      this.lectura(url, nivel, posi, size, model);

    } else return



  }

  onSelectChange(posi: number, nivel: number) {
    this.conf.form[posi - nivel].parametros.forEach((par, i) => {
      if (i > nivel) {

        this.leer(par.urlOrigen, par.nivel, par.posi).then(result => {
          this.datos[par.posi] = result
          par.model = this.datos[par.posi][0]
          if (nivel == 0) {
            var data: any = this.conf.form[posi - nivel].parametros[nivel + 2]
            this.leer(data.urlOrigen, data.nivel, data.posi).then(result => {
              this.datos[data.posi] = result
              
              data.model = this.datos[data.posi][0]
            })
          }

        })
      }
    })
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
  async leer(url: string, nivel: number, posi: number): Promise<any> {
    var response: any
    try {
      if (nivel == 0) {
        console.log(url," la url pilas")
        response = await this.service.listar(url).toPromise()

      }
      else {
        //   console.log(this.conf.form[posi - nivel].parametros[nivel - 1].model[this.conf.form[posi - nivel].parametros[nivel - 1].id], " el id ", this.conf.form[posi - nivel].parametros[nivel - 1].model)
        console.log(url," la url pilas 2")
        response = await this.service.ver(this.conf.form[posi - nivel].parametros[nivel - 1].model[this.conf.form[posi - nivel].parametros[nivel - 1].id], url).toPromise()
      }
    } catch (error) {

    }


    return response
  }
  clearItem(item: any) {
    this.formControls[item].setValue('')
    this.modelo[item] = ''
  }
  getFechaInicio(valor: any): void {
    if (this.formControls[valor])
      console.log(valor, this.formControls[valor].status)


    // return this.formControls[valor].status ? 'Las fechas son requeridas' : '';

  }
  getFechaFin(valor: any): void {
    // const control = this.form.get(valor);
    //return control && control.hasError('required') ? 'La fecha final es requerida' : '';
  }
  isInvalid(): boolean {
    return !this.valid;
  }

  saveAndClose() {
    var dataPayload: any = {}
    var payload: any = {}
    console.log(dataPayload," en pleno 0 ")
    this.conf.form.forEach((item) => {
      
      if (item.field && !item.disabled) {
        this.conf.payload[item.field] = this.form.get(item.field).value
        var items = item.field
        payload[item.field] = this.form.get(item.field).value
        dataPayload = Object.assign(dataPayload, { [items]: this.conf.payload[item.field] })
      }
      if (item.type == "select" || item.type == "multiSelect") {
        item.parametros.forEach(dat => {
          payload[dat.field] = dat.model[dat.field]
          payload[dat.id] = dat.model[dat.id]
          if(item.type == "select"){
            dat.relacion[dat.objeto] = { [dat.id]: dat.model[dat.id] }
           payload= Object.assign(payload, dat.relacion);
          }
         
          if (item.type == "multiSelect") {
            dat.relacion[dat.objeto] = dat.datos
            payload=Object.assign({},dat.relacion);
            console.log(payload," diplomado")
            dataPayload = Object.assign(dataPayload,dat.relacion);
            dataPayload = Object.assign(dataPayload, {"objeto":dat.objeto});
            dataPayload = Object.assign(dataPayload, {"field":dat.field});
            dataPayload = Object.assign(dataPayload, {"id":dat.id});
          
          } else {

            dataPayload = Object.assign(dataPayload, { [dat.id]: dat.model[dat.id] });
          }
        })
      }

    });
   
    if(this.conf.primaryTable ){
      if(this.conf.columName!=null){
        payload= Object.assign(payload, { [this.conf.columName]: []});
        
      }
     // dataPayload = Object.assign(dataPayload, this.conf.payload[this.conf.objeto]);
    
    }else if(!this.conf.asignar){
        payload = Object.assign(payload,{[this.conf.objeto]:{[this.conf.idForaneo]:this.conf.payload[this.conf.idForaneo]}})
     
    }
   
    this.dataPayload.push(payload);
    this.dataPayload.push(dataPayload);
    console.log( this.dataPayload,"la data")
    this.gestionResgitro.emit(this.dataPayload);
    this.activeModal.close(this.dataPayload);

  }

  closeModal() {
    this.activeModal.dismiss(this.dataPayload);
  }

}
