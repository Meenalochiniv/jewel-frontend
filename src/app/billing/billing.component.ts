import { Component } from '@angular/core';
import { BillsService } from '../bills.service';
import { Billing } from '../billing.model';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  customerId: number = 0;
  productIds: number[] = [];
  billNo: number = 0;

  generatedBill?: Billing;
  customerBills: Billing[] = [];
  searchedBill?: Billing;

  constructor(private billsService: BillsService) {}

  updateProductIds(input: string) {
    this.productIds = input.split(',').map(id => +id.trim());
  }

  generateBill() {
    this.billsService.generateBill(this.customerId, this.productIds).subscribe({
      next: (bill) => this.generatedBill = bill,
      error: (err) => console.error('Error generating bill:', err)
    });
  }

  getBillsByCustomerId() {
    this.billsService.getBillsByCustomerId(this.customerId).subscribe({
      next: (bills) => this.customerBills = bills,
      error: (err) => console.error('Error fetching customer bills:', err)
    });
  }

  getBillByBillNo() {
    this.billsService.getBillByBillNo(this.billNo).subscribe({
      next: (bill) => this.searchedBill = bill,
      error: (err) => console.error('Bill not found:', err)
    });
  }
}
