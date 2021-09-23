import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { DetailsComponent } from './details/details.component';
import { AnimalsListResolver } from './animals-list/animals-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    resolve: {
      animals: AnimalsListResolver
    }
  },
  {
    path: ':animalId',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
