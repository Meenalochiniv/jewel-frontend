import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { Billing } from '../billing.model';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
// export class BillingComponent {
//   customerId: number = 0;
//   productIds: number[] = [];
//   billNo: number = 0;

//   generatedBill?: Billing;
//   customerBills: Billing[] = [];
//   searchedBill?: Billing;

//   constructor(private billsService: BillsService, private cartService: CartService) {}

//   updateProductIds(input: string) {
//     this.productIds = input.split(',').map(id => +id.trim());
//   }

//   // generateBill() {
//   //   this.billsService.generateBill(this.customerId, this.productIds).subscribe({
//   //     next: (bill) => this.generatedBill = bill,
//   //     error: (err) => console.error('Error generating bill:', err)
//   //   });
//   // }
  

//   getBillsByCustomerId() {
//     this.billsService.getBillsByCustomerId(this.customerId).subscribe({
//       next: (bills) => this.customerBills = bills,
//       error: (err) => console.error('Error fetching customer bills:', err)
//     });
//   }

//   getBillByBillNo() {
//     this.billsService.getBillByBillNo(this.billNo).subscribe({
//       next: (bill) => this.searchedBill = bill,
//       error: (err) => console.error('Bill not found:', err)
//     });
//   }
//   cartItems: Product[] = [];

// ngOnInit(): void {
//   this.cartItems = this.cartService.getCartItems();
// }

// }


export class BillingComponent implements OnInit {
  cartItems: Product[] = [];
  shippingAddress: string = '';
  paymentMethod: string = 'Card';
  orderPlaced: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  placeOrder(): void {
    if (!this.shippingAddress.trim()) {
      alert('Please enter a shipping address.');
      return;
    }

    this.orderPlaced = true;
    this.cartService.clearCart();
  }

  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.producttotalcost * item.productQuantity);
    }, 0);
  }
}
