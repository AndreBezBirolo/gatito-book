import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  authUser(userName: string, password: string): Observable<HttpResponse<any>> {
    return this.http
      .post(API_URL + '/user/login', {
          userName, password
        }, {
          observe: 'response'
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken)
        })
      )
  }
}
