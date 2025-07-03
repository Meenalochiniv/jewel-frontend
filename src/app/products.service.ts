import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:8085/api/products';

  constructor(private http: HttpClient) {}

 
  addProduct(vendorId: number, product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/${vendorId}`, product);
  }

 
  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${productId}`, product);
  }

 
  deleteProduct(productId: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${productId}`, { responseType: 'text' });
  }

  
  getProductsByVendor(vendorId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/vendor/${vendorId}`);
  }
}
