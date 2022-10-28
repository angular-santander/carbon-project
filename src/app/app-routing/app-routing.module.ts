import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from '../categorias/editar/editar.component';
import { ExcluirComponent } from '../categorias/excluir/excluir.component';
import { IncluirComponent } from '../categorias/incluir/incluir.component';
import { ListarComponent } from '../categorias/listar/listar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'incluir', component: IncluirComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'excluir', component: ExcluirComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
