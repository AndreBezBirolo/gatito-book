import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './comments';

const API = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(id: number): Observable<Comments> {
    return this.http
      .get<Comments>(`${API}/photos/${id}/comments`);
  }

  appendComment(id: number, commentText: string): Observable<Comment> {
    return this.http
      .post<Comment>(`${API}/photos/${id}/comments`, { commentText})
  }
}
