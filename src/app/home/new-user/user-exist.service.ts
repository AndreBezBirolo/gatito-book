import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistService {

  constructor(
    private newUserService: NewUserService
  ) { }

  userExist() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(
          switchMap((userNameInput) => this.newUserService.checkUsername(userNameInput)),
          map((userAlreadyExist) => userAlreadyExist ? { userExist: true } : null),
          first()
        )
    }
  }
}
