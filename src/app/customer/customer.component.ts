import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customers.service';
import { Product } from '../product.model';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})

export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer = this.initializeCustomer();
  isEditMode: boolean = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // You can load customers here if needed
  }

  initializeCustomer(): Customer {
    return {
      firstName: '',
      lastName: '',
      emailId: '',
      phoneNo: '',
      password: ''
    };
  }

  addCustomer(): void {
    this.customerService.addCustomer(this.selectedCustomer).subscribe({
      next: (data) => {
        this.customers.push(data);
        this.selectedCustomer = this.initializeCustomer();
      },
      error: (err) => console.error('Error adding customer:', err)
    });
  }

  editCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer };
    this.isEditMode = true;
  }

  updateCustomer(): void {
    if (!this.selectedCustomer.customerId) return;

    this.customerService.updateCustomer(this.selectedCustomer.customerId, this.selectedCustomer).subscribe({
      next: (data) => {
        const index = this.customers.findIndex(c => c.customerId === data.customerId);
        if (index !== -1) this.customers[index] = data;
        this.selectedCustomer = this.initializeCustomer();
        this.isEditMode = false;
      },
      error: (err) => console.error('Error updating customer:', err)
    });
  }

  
  deleteCustomer(customerId: number | undefined): void {
    if (customerId === undefined) {
      console.error('Customer ID is undefined');
      return;
    }
  
    this.customerService.deleteCustomer(customerId).subscribe({
      next: () => {
        this.customers = this.customers.filter(c => c.customerId !== customerId);
      },
      error: (err) => console.error('Error deleting customer:', err)
    });
  }
  

  // loadProductsByVendor(vendorId: number): void {
  //   if (vendorId === undefined || vendorId === null) return;
  
  //   this.customerService.viewProductsByVendor(vendorId).subscribe({
  //     next: (products) => {
  //       console.log('Products by vendor:', products);
        
  //     },
  //     error: (err) => console.error('Error loading products by vendor:', err)
  //   });
  // }
  
  cancelEdit(): void {
    this.selectedCustomer = this.initializeCustomer();
    this.isEditMode = false;
  }
}
