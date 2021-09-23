import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { PhotoComponent } from './photo/photo.component';
import { CardModule } from '../components/card/card.module';
import { GridPhotosComponent } from './grid-photos/grid-photos.component';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './details/comments/comments.component';
import { MessageModule } from '../components/message/message.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnimalsListComponent,
    PhotoComponent,
    GridPhotosComponent,
    DetailsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    MessageModule,
    ReactiveFormsModule
  ]
})
export class AnimalsModule { }
