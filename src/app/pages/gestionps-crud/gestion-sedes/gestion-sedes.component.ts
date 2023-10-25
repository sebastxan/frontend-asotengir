import { Component } from '@angular/core';
import { Seccional } from './cruds/seccional';
import { Sede } from './cruds/sede';
import { FacultadPrograma } from './cruds/facultadPrograma';
import { AsignarSede } from './cruds/asignarSede';
import { Facultad } from './cruds/facultad';
import { Escalafon } from './cruds/escalafon';
import { Usuarios } from './cruds/usuarios';
import { User } from './cruds/user';
import { Role } from './cruds/roles';
import { AsignarRole } from './cruds/asignarRol';

@Component({
  selector: 'app-gestion-sedes',
  templateUrl: './gestion-sedes.component.html',
  styleUrls: ['./gestion-sedes.component.scss']
})
export class GestionSedesComponent {
  seccional: any = Seccional;
  sede: any = Sede
  facultadPrograma: any = FacultadPrograma
  asignarSede: any = AsignarSede
  facultad: any = Facultad
  escalafon: any = Escalafon
  user: any = Usuarios
  users:any= User;
  role: any = Role
  asignarRole: any = AsignarRole


  public showSidebar = false;
  seleccion: number = 0
  constructor() {

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
    else if (val === 'opcion4') {
      this.seleccion = 3;

    }
    else if (val === 'opcion5') {
      this.seleccion = 4;

    }
    else if (val === 'opcion6') {
      this.seleccion = 5;

    }
    else if (val === 'opcion7') {
      this.seleccion = 6;

    }
    else if (val === 'opcion8') {
      this.seleccion = 7;

    }
    else if (val === 'opcion10') {
      this.seleccion = 9;

    }
    else if (val === 'opcion11') {
      this.seleccion = 10;

    }
  }

}
