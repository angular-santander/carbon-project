import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import {
  BreadcrumbModule,
  GridModule,
  ButtonModule,
  TabsModule,
  IconModule
} from 'carbon-components-angular';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    GridModule,
    BreadcrumbModule,
    ButtonModule,
    TabsModule,
    IconModule,
    HttpClientModule,
    


  ],
  providers: [UserService]
})
export class EditarModule { }
