import { Component } from '@angular/core';
import { Ciudad } from './ciudades';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent {
  ciudad:any=Ciudad
}
