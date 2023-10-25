import { Component } from '@angular/core';
import { Estado } from './estados';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent {
  estado:any=Estado
}
