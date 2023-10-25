import { Component,  OnInit } from '@angular/core';
import { Pais } from './cruds/paises'; 
import { Estado } from './cruds/estados';
import { Ciudad } from './cruds/ciudades';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit  {
  pais:any=Pais
  estado:any=Estado
  ciudad:any=Ciudad
  public showSidebar = false;
  seleccion:number=0
  constructor(){
 
  }
  ngOnInit(): void {
   
  }

  mobileSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  
  selectionlblClick(val: string) {
    if (val === 'opcion1') {
      this.seleccion = 0;
    } else if (val === 'opcion2') {
      this.seleccion = 1;
    } else if (val === 'opcion3') {
      this.seleccion = 2;
     
    }
  }
  
}
