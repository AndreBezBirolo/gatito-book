import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(
    private http: HttpClient
  ) { }

  registerNewUser(user: NewUser) {
    return this.http
      .post(API_URL + '/user/signup', user);
  }

  checkUsername(userName: string) {
    return this.http
      .get(`${API_URL}/user/exists/${userName}`)
  }
}
