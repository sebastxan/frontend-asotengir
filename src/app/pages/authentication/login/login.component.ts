import { Component, OnInit } from '@angular/core';
import { Users } from './usuario';
import { AuthService } from './auth.service'
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
//import { NotificacionService } from './notificacion.service';
import { HttpHeaders } from '@angular/common/http';

import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit{
  titulo: string = 'Por favor Sign In!';
  usuario: Users;

  public notifications = 0;
  apiUrl:string=environment.apiEndpoint;
  form: FormGroup;
  x:string="hola"
  valid: boolean = false;
 
  
  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required], 
      password:['',Validators.required]
      // Ejemplo de control de formulario
      // Otros controles de formulario aquí
    });
    this.usuario = new Users();
  }

  ngOnInit() {
   
    if (this.authService.isAuthenticated()) {
      swal('Login', `Hola ${this.authService.usuario.username} ya estás autenticado!`, 'info');
      this.router.navigate(['/']);
    
  }
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal('Error Login', 'Username o password vacías!', 'error');
      //alert("enrg")
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;
   /*   this.notificacionService.subscribe('/socket', (): void => {
        
      });*/
      const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });
      
  
    
      this.router.navigate(['/']);
      
      swal('Login', `Hola ${usuario.username}, has iniciado sesión con éxito!`, 'success');
    }, err => {
      if (err.status == 400) {
        swal('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  clearItem(item: any) {
    
console.log(item,"el item")
this.usuario[item]=""
  this.form[this.usuario[item]].setValue('')
   
  }
}
