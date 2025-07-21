import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {

  admins: Admin[] = [];
  newAdmin: Admin = { username: '', email: '', password: '' };
  selectedAdmin: Admin | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAllAdmins().subscribe(data => {
      this.admins = data;
    });
  }

  addAdmin(): void {
    if (this.newAdmin.username && this.newAdmin.email && this.newAdmin.password) {
      this.adminService.createAdmin(this.newAdmin).subscribe(admin => {
        this.admins.push(admin);
        this.newAdmin = { username: '', email: '', password: '' };
      });
    }
  }

  editAdmin(admin: Admin): void {
    this.selectedAdmin = { ...admin };
  }

  updateAdmin(): void {
    if (this.selectedAdmin && this.selectedAdmin.adminId) {
      this.adminService.updateAdmin(this.selectedAdmin.adminId, this.selectedAdmin).subscribe(updated => {
        const index = this.admins.findIndex(a => a.adminId === updated.adminId);
        if (index !== -1) this.admins[index] = updated;
        this.selectedAdmin = null;
      });
    }
  }

  deleteAdmin(id: number): void {
    this.adminService.deleteAdmin(id).subscribe(() => {
      this.admins = this.admins.filter(admin => admin.adminId !== id);
    });
  }
}
