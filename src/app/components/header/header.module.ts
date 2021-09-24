import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    MenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
