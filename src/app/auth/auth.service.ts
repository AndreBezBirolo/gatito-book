import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authAction(userName: string, password: string): Observable<any> {
    return this.http.post(API_URL + '/user/login', {
      userName, password
    })
  }
}
