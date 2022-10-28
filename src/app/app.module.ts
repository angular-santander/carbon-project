import { NgModule } from '@angular/core'; //
import { BrowserModule } from '@angular/platform-browser'; //
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListarComponent } from './categorias/listar/listar.component';
// carbon-components-angular default imports
import {
  UIShellModule,
  IconModule,
  NFormsModule,
  ButtonModule,
  TableModule,
  PaginationModule,
} from 'carbon-components-angular';
import { IncluirComponent } from './categorias/incluir/incluir.component';
import { EditarComponent } from './categorias/editar/editar.component';
import { ExcluirComponent } from './categorias/excluir/excluir.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EditarCategoriaService } from './categorias/editar/editar.service';

// import {AppSwitcher20} from '@carbon/icons/es/app-switcher/20';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CategoriasComponent,
    ListarComponent,
    IncluirComponent,
    EditarComponent,
    ExcluirComponent,
  ],

  imports: [
    BrowserModule,
    IconModule,
    AppRoutingModule,
    UIShellModule,
    NFormsModule,
    ButtonModule,
    TableModule,
    FormsModule,
    PaginationModule,
  ],

  providers: [],
  bootstrap: [AppComponent, EditarCategoriaService],
})
export class AppModule {}