import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarCategoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
