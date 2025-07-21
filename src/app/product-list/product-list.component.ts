import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  message: string = '';

  constructor(private productService: ProductsService,
    private cartService: CartService,
        private router: Router
    ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
     next: (res) => {
     this.products = res;
    this.message = '';
    },
     error: (err) => {
     this.message = 'Error fetching all products.';
    console.error(err);
    }
    });
     }
     addToCart(product: Product): void {
      this.cartService.addToCart(product);
      console.log('Cart after adding:', this.cartService.getCartItems());
      this.router.navigate(['/checkout']);
    }
  
}



