import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animals } from './animal';
import { TokenService } from '../auth/token.service';

const API = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  listImagesByUser(userName: string): Observable<Animals> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders()
      .append('x-acces-token', token)
    return this.http
      .get<Animals>(`${API}/${userName}/photos`, {
        headers
      })
  }
}
