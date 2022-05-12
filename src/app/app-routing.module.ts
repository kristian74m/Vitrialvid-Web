import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  
    {path: '', component: InicioComponent, pathMatch:'full'},
    {path: '', component: SkeletonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
