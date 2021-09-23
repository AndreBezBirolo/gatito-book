import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

import { TokenService } from '../token.service';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject?: BehaviorSubject<User> =
    new BehaviorSubject<User>({});

  constructor(
    private tokenService: TokenService
  ) {
    if(this.tokenService.hasToken()) {
      this.decodeJwt()
    }
  }

  private decodeJwt() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token) as User;
    this.userSubject?.next(user)
  }

  getUserObservable() {
    return this.userSubject?.asObservable()
  }

  saveToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeJwt();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject?.next({});
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
