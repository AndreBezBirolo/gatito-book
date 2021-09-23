import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


const API_URL = environment.API_URL;
const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem(KEY) ?? ''
  }

  setToken(token: string) {
    localStorage.setItem(KEY, token)
  }

  removeToken() {
    localStorage.removeItem(KEY)
  }

  hasToken() {
    return !!this.getToken()
  }
}
