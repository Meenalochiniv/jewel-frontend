import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  private baseUrl = 'http://localhost:8082/api/feedback';

  constructor(private http: HttpClient) {}

  
  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.baseUrl}/add`, feedback);
  }

  
  getFeedbackByCustomerId(customerId: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/customer/${customerId}`);
  }

 
  getFeedbackById(feedbackId: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.baseUrl}/${feedbackId}`);
  }
}
