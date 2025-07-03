import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})

export class VendorComponent implements OnInit {

  vendorForm!: FormGroup;
  vendor: any;
  vendorIdToFetch: number = 0;
  message: string = '';

  constructor(private vendorService: VendorsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      id: [''],
      name: [''],
      mailId: [''],
      phoneNo: [''],
      password:['']
    });
  }

  addVendor(): void {
    this.vendorService.addVendor(this.vendorForm.value).subscribe({
      next: (res) => {
        this.message = 'Vendor added successfully!';
        console.log(res);
      },
      error: (err) => {
        this.message = 'Error adding vendor.';
        console.error('Error adding vendor:', err);
      }
    });
  }

  getVendor(): void {
    this.vendorService.getVendorById(this.vendorIdToFetch).subscribe({
      next: (res) => {
        this.vendor = res;
        this.message = '';
      },
      error: (err) => {
        this.message = 'Vendor not found.';
        console.error('Error fetching vendor:', err);
      }
    });
  }

  // updateVendor(): void {
  //   this.vendorService.updateVendor(this.vendorForm.value).subscribe({
  //     next: (res) => {
  //       this.message = 'Vendor updated successfully!';
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       this.message = 'Error updating vendor.';
  //       console.error('Error updating vendor:', err);
  //     }
  //   });
  // }

  updateVendor(): void {
   console.log('Updating vendor:', this.vendorForm.value);
   this.vendorService.updateVendor(this.vendorForm.value).subscribe({
     next: (res) => {
    this.message = 'Vendor updated successfully!';
   console.log(res);
 },
  error: (err) => {
    this.message = 'Error updating vendor.';
    console.error('Error updating vendor:', err.error || err.message || err);
    }
   });
  }    
  deleteVendor(): void {
    const id = this.vendorForm.value.id;
    this.vendorService.deleteVendor(id).subscribe({
      next: (res) => {
        this.message = res;
        this.vendorForm.reset();
      },
      error: (err) => {
        this.message = 'Error deleting vendor.';
        console.error('Error deleting vendor:', err);
      }
    });
  }
}
