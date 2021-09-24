import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { PhotoComponent } from './photo/photo.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './details/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    PhotoComponent,
    GridPhotosComponent,
    DetailsComponent,
    CommentsComponent,
    NewAnimalComponent,
    NewPhotoComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    SharedModule
  ]
})
export class AnimalsModule { }
