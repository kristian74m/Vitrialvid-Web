import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  
    {path: '', component: InicioComponent, pathMatch:'full'},
    {path: 'Inicio', component: InicioComponent},
    {path: 'Trabajos', component: TrabajosComponent},
    {path: 'Acerca', component: AcercaComponent},
    {path: 'Contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
