import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from './billing.model'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  private baseUrl = 'http://localhost:8083/billing';

  constructor(private http: HttpClient) { }

  generateBill(customerId: number, productIds: number[]): Observable<Billing> {
    let params = new HttpParams().set('customerId', customerId.toString());
    productIds.forEach(id => {
      params = params.append('productIds', id.toString());
    });
    return this.http.post<Billing>(`${this.baseUrl}/generate`, null, { params });
  }

  getBillsByCustomerId(customerId: number): Observable<Billing[]> {
    return this.http.get<Billing[]>(`${this.baseUrl}/customer/${customerId}`);
  }

  getBillByBillNo(billNo: number): Observable<Billing> {
    return this.http.get<Billing>(`${this.baseUrl}/${billNo}`);
  }
}
