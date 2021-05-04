

import { Component } from '@angular/core';
import { LoginService } from './api/services';
import { Usuario } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usuario: Usuario;


  public constructor(private api: LoginService){
    this.usuario = {};
    this.api.apiLoginGet$Json({Id: 1}).subscribe(res => {
      this.usuario = res;
    });
  }
}
