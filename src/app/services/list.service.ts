import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { animationFrameScheduler, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = "http://localhost:3000/animals";

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  };

  getItem() {
    return this.http.get<Animal>(`${this.apiUrl}/$(id)`);
  }
}
