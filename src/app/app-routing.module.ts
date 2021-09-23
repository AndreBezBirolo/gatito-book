import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsntLoggedGuard } from './auth/isnt-logged.guard';
import { IsLoggedGuard } from './auth/is-logged.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then((m) => m.HomeModule),
    canLoad: [
      IsLoggedGuard
    ]
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module')
      .then((m) => m.AnimalsModule),
    canLoad: [
      IsntLoggedGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
