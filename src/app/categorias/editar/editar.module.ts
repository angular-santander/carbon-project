import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule, 
          GridModule, 
          ButtonModule, 
          TabsModule, 
          IconModule 
} from 'carbon-components-angular';
import { EditarCategoriaService } from './editar.service';


@NgModule({
  declarations: [],
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
