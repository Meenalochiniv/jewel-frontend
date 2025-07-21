import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: Product[] = [];

  // Add a product to the cart
  // addToCart(product: Product): void {
  //   this.cartItems.push(product);
  //   console.log('CartService: added product', product);
  //   console.log('CartService: current cart', this.cartItems);
  // }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.productId === product.productId);
    if (existingItem) {
      existingItem.productQuantity += 1;
    } else {
      this.cartItems.push({ ...product, productQuantity: 1 });
    }
  }
  
  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(p => p.productId === productId);
    if (item) item.productQuantity += 1;
  }
  
  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(p => p.productId === productId);
    if (item && item.productQuantity > 1) {
      item.productQuantity -= 1;
    } else {
      this.removeFromCart(productId);
    }
  }
  
  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + (item.producttotalcost * item.productQuantity), 0);
  }
  

  // Get all items in the cart
  getCartItems(): Product[] {
    return this.cartItems;
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
  }

  // Optional: Remove a specific item from the cart
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.productId !== productId);
  }

  // Optional: Get total cost
  // getTotalCost(): number {
  //   return this.cartItems.reduce((total, item) => total + item.producttotalcost, 0);
  // }
}
