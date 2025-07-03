import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  private baseUrl = 'http://localhost:8084/api/vendors';

  constructor(private http: HttpClient) {}

  
  addVendor(vendor: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(`${this.baseUrl}/post`, vendor);
  }

 
  getVendorById(vendorId: number): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.baseUrl}/${vendorId}`);
  }


  // updateVendor(vendor: Vendor): Observable<Vendor> {
  //   return this.http.put<Vendor>(`${this.baseUrl}/put`, vendor);
  // }
  updateVendor(vendor: Vendor): Observable<Vendor> {
    return this.http.put<Vendor>(`${this.baseUrl}/${vendor.id}`, vendor);
  }
  
  
  
  deleteVendor(vendorId: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${vendorId}`, { responseType: 'text' });
  }
}
