import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { PhotoComponent } from './photo/photo.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    PhotoComponent,
    GridPhotosComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule
  ]
})
export class AnimalsModule { }
