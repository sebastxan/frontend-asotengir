import { Component } from '@angular/core';
import { Pais } from './paises';
@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent {
  pais:any=Pais
}
