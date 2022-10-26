import { NgModule } from '@angular/core'; //
import { BrowserModule } from '@angular/platform-browser'; //

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListarComponent } from './categorias/listar/listar.component';

// carbon-components-angular default imports
import { UIShellModule, IconModule } from 'carbon-components-angular';
import {Notification20} from '@carbon/icons/es/notification/20';
import {UserAvatar20} from '@carbon/icons/es/user--avatar/20';
import { IncluirComponent } from './categorias/incluir/incluir.component';
import { EditarComponent } from './categorias/editar/editar.component';
import { ExcluirComponent } from './categorias/excluir/excluir.component';
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
    IconModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
