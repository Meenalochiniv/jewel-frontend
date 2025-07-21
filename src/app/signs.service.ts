import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class SignsService {
  private baseUrl = 'http://localhost:8087/api'; 

  constructor(private http: HttpClient) {}

  signup(username: string, password: string, role: string): Observable<any> {
    const body = { username, password, role };
    return this.http.post(`${this.baseUrl}/signup`, body);
  }

  signin(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/signin`, body);
  }
}
