/*
Crea una nueva directiva llamada BuscarPorIdDirective utilizando el comando ng generate directive BuscarPorId en la terminal de tu proyecto Angular. Esto generará los archivos necesarios para la directiva.

Abre el archivo de la directiva buscar-por-id.directive.ts que se ha generado y reemplaza el código existente con el siguiente:
*/
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[buscarPorId]'
})
export class BuscarPorIdDirective {
  constructor(private el: ElementRef) { }

  buscarElementoPorId(id: string) {
    const elemento = this.el.nativeElement.querySelector(`#${id}`);
    if (elemento) {
        // Agregar el icono al frente del elemento
        const icono = document.createElement('span');
        icono.classList.add('material-icons');
        icono.textContent = 'icono'; // Reemplaza 'icono' con el nombre del icono que desees usar
        elemento.insertBefore(icono, elemento.firstChild);
  
        // Agregar el comentario en la parte inferior del elemento
        const comentario = document.createElement('div');
        comentario.classList.add('comentario');
        comentario.textContent = 'Este es un comentario'; // Reemplaza 'Este es un comentario' con el texto del comentario que desees
        elemento.appendChild(comentario);
      } else {
        console.log(`No se encontró ningún elemento con el ID ${id}`);
      }
    }
  
}
/*
En el archivo de enrutamiento (app-routing.module.ts), importa los
módulos necesarios y define una ruta para el componente PaginaComponent:*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  // Otras rutas
  { path: 'pagina/:id', component: PaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*Crea un nuevo componente llamado PaginaComponent que se utilizará para mostrar la página que contiene el elemento resaltado. Puedes generar el componente utilizando el comando ng generate component Pagina en la terminal de tu proyecto.

Dentro del archivo pagina.component.ts, importa los módulos necesarios y define una variable para almacenar el ID recibido como parámetro:*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarPorIdDirective } from '../buscar-por-id.directive';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  elementoId: string;

  constructor(private route: ActivatedRoute, private buscarPorIdDirective: BuscarPorIdDirective) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.elementoId = params['id'];
      // Llamar a una función para resaltar el elemento
      this.buscarPorIdDirective.buscarElementoPorId(this.elementoId);
    });
  }

  resaltarElemento() {
    // Lógica para resaltar el elemento con el ID especificado
    const elemento = document.getElementById(this.elementoId);
    if (elemento) {
      // Agregar el icono al frente del elemento
      const icono = document.createElement('span');
      icono.classList.add('material-icons');
      icono.textContent = 'icono'; // Reemplaza 'icono' con el nombre del icono que desees usar
      elemento.insertBefore(icono, elemento.firstChild);

      // Agregar el comentario en la parte inferior del elemento
      const comentario = document.createElement('div');
      comentario.classList.add('comentario');
      comentario.textContent = 'Este es un comentario'; // Reemplaza 'Este es un comentario' con el texto del comentario que desees
      elemento.appendChild(comentario);
    }
  }
}
/*
Crea una hoja de estilos CSS (pagina.component.css) para aplicar el resaltado visual al elemento:
*/

.material-icons {
    margin-right: 5px;
  }
  
  .comentario {
    font-style: italic;
    font-size: 12px;
    color: gray;
    margin-top: 5px;
  } 
/*
En el componente donde deseas utilizar la directiva originalmente (por ejemplo, app.component.html), actualiza el código para redirigir a la página con el elemento resaltado. Puedes utilizar un enlace <a> con una URL dinámica o utilizar la función router.navigate para navegar programáticamente. Por ejemplo
*/
<a [routerLink]="['/pagina', 'miElemento']">Ir a la página con el elemento resaltado</a>