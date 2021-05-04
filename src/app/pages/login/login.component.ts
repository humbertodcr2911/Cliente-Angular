import { LoginService } from './../../api/services/login.service';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../api/models/usuario';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;

  constructor( private router: Router, private loginService: LoginService, private api: LoginService, private fb: FormBuilder ) {
    this.usuario = {};
    this.api.apiLoginGet$Json({Id: 1}).subscribe(res => {
      this.usuario = res;


    });
  }

 public usuario: Usuario;

  recordarme = false;

  loginForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {

    if ( localStorage.getItem('email') ) {
      this.recordarme = true;
    }

  }

  signIn() {

    if (this.loginForm.value.nombre === 'APP_BCK' && this.loginForm.value.email === 'testapis@tuten.cl' && this.loginForm.value.password === '1234' ) {

      this.router.navigateByUrl('/datos');

    } else {

      alert('Llene todos los campos requeridos');

    }

  }

}


