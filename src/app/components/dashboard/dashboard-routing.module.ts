import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: '', component: InicioComponent},
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'crear-usuario', component: CrearUsuarioComponent},
    { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
