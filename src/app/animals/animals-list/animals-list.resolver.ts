import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AnimalsService } from '../animals.service';
import { UserService } from '../../auth/user/user.service';
import { Animals } from '../animal';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalsListResolver implements Resolve<Animals> {

  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    // @ts-ignore
    return this.userService.getUserObservable().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.listImagesByUser(userName)
      }),
      take(1)
    );
  }
}
