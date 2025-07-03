import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productForm!: FormGroup;
  products: Product[] = [];
  vendorId: number = 0;
  message: string = '';

  constructor(private productService: ProductsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productId: [''],
      productMaterial: [''],
      productWeight: [''],
      totalcost: [''],
      productQuantity: [''],
      vendorId: [''],
      imageUrl: ['']
    });
  }

  addProduct(): void {
    const vendorId = this.productForm.value.vendorId;
   this.productService.addProduct(vendorId, this.productForm.value).subscribe({
      next: (res) => {
        this.message = 'Product added successfully!';
        this.getProductsByVendor();
      },
      error: (err) => {
        this.message = 'Error adding product.';
        console.error(err);
      }
    });
  }

  updateProduct(): void {
    const productId = this.productForm.value.productId;
    this.productService.updateProduct(productId, this.productForm.value).subscribe({
      next: (res) => {
        this.message = 'Product updated successfully!';
        this.getProductsByVendor();
      },
      error: (err) => {
        this.message = 'Error updating product.';
        console.error(err);
      }
    });
  }

  deleteProduct(): void {
    const productId = this.productForm.value.productId;
    this.productService.deleteProduct(productId).subscribe({
      next: (res) => {
        this.message = res;
        this.getProductsByVendor();
      },
      error: (err) => {
        this.message = 'Error deleting product.';
        console.error(err);
      }
    });
  }

  getProductsByVendor(): void {
    this.productService.getProductsByVendor(this.vendorId).subscribe({
      next: (res) => {
        this.products = res;
        this.message = '';
      },
      error: (err) => {
        this.message = 'Error fetching products.';
        console.error(err);
      }
    });
  }
}
