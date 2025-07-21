import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'] 
})

export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart items in checkout:', this.cartItems); 
  }
  // increaseQuantity(productId: number): void {
    
increaseQuantity(productId?: number): void {
  if (productId !== undefined) {
    this.cartService.increaseQuantity(productId);
    this.cartItems = this.cartService.getCartItems();
  }
}
decreaseQuantity(productId?: number): void {
  if (productId !== undefined) {

  // decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
    this.cartItems = this.cartService.getCartItems();
  }
}
  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }
  proceedToBilling(): void {
    // You can navigate to a billing page or show a message
    console.log('Proceeding to billing...');
     this.router.navigate(['/billing']);
  }
  
}
