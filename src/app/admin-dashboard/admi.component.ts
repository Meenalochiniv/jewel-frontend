import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrl: './admi.component.css'
})
export class AdmiComponent {

  constructor(private router: Router) {}

  goToVendorManagement(): void {
    this.router.navigate(['/vendor']);
  }

  // viewComplaints(): void {
  //   // Navigate or open complaints section
  //   console.log('Viewing complaints...');
  // }

  // viewBillingDetails(): void {
  //   // Navigate or open billing section
  //   console.log('Viewing billing details...');
  // }
}
