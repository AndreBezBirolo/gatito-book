import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal, Animals } from './animal';
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

 private setHeader() {
   const token = this.tokenService.getToken();
   return new HttpHeaders()
     .append('x-acces-token', token)
  }

  listImagesByUser(userName: string): Observable<Animals> {
    const headers = this.setHeader()
    return this.http
      .get<Animals>(`${API}/${userName}/photos`, {
        headers
      })
  }

  getById(id: number): Observable<Animal> {
    const headers = this.setHeader()
    return this.http
      .get<Animal>(`${API}/photos/${id}`, {
        headers
      })
  }
}
