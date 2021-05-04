import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/api/models';
import { LoginService } from 'src/app/api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  public usuario: Usuario;


  public constructor(private api: LoginService, private router: Router){
    this.usuario = {};
    this.api.apiLoginGet$Json({Id: 1}).subscribe(res => {
      this.usuario = res;
    });
  }



  ngOnInit(): void {
  }

  salir() {

    this.router.navigateByUrl('/login');

  }

}
