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
  ) { }

  listImagesByUser(userName: string): Observable<Animals> {
    return this.http
      .get<Animals>(`${API}/${userName}/photos`)
  }

  getById(id: number): Observable<Animal> {
    return this.http
      .get<Animal>(`${API}/photos/${id}`)
  }
}
