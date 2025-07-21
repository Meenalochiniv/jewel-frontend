import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.css'
})

export class VendorDashboardComponent {

  constructor(private router: Router) {}

  goToProductManagement(): void {
    this.router.navigate(['/product']);
  }
}
