import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule, 
          GridModule, 
          ButtonModule, 
          TabsModule, 
          IconModule 
} from 'carbon-components-angular';
import { EditarCategoriaService } from './editar.service';
import { EditarSelecionadoComponent } from './editar-selecionado/editar-selecionado.component';


@NgModule({
  declarations: [
    EditarSelecionadoComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    BreadcrumbModule,
    ButtonModule,
    TabsModule, 
    IconModule
    
  ],
  providers: [EditarCategoriaService]
})
export class EditarModule { }
