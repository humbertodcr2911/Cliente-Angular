import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosComponent } from './pages/datos/datos.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  { path: 'login'   , component: LoginComponent },
  { path: 'datos'   , component: DatosComponent },
  { path: '**', redirectTo: 'datos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
