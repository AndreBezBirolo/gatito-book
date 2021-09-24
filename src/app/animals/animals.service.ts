import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Animal, Animals } from './animal';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.API_URL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  listImagesByUser(userName: string): Observable<Animals> {
    return this.http
      .get<Animals>(`${API}/${userName}/photos`);
  }

  getById(id: number): Observable<Animal> {
    return this.http
      .get<Animal>(`${API}/photos/${id}`)
  }

  deletePhoto(id: number): Observable<Animal> {
    return this.http
      .delete<Animal>(`${API}/photos/${id}`);
  }

  likePhoto(id: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`,
        {}, {observe: 'response'})
      .pipe(
        mapTo(true),
        catchError(
          err => err.status === NOT_MODIFIED
            ? of(false)
            : throwError(err)
        )
      )
  }

  uploadPhoto(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http
      .post(`${API}/photos/upload`, formData, {
        observe: 'events',
        reportProgress: true,
      })
  }
}
