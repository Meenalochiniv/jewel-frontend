import { Component } from '@angular/core';
import { SignsService } from '../signs.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})

export class SignComponent {
  username: string = '';
  password: string = '';
  role: string = 'USER';
  isSignup: boolean = true;
  message: string = '';

  constructor(private signsService: SignsService, private authService: AuthService ,private router: Router) {}

  toggleMode() {
    this.isSignup = !this.isSignup;
    this.message = '';
  }

  onSubmit() {
    if (!this.username || !this.password) {
      alert('Please enter valid credentials.');
      return;
    }

    if (this.isSignup) {
      this.signsService.signup(this.username, this.password, this.role).subscribe({
        next: (res) => {
          this.message = 'Signup successful!';
          alert(this.message);
        },
        error: (err) => {
          this.message = 'Signup failed: ' + (err.error?.message || 'Unknown error');
          alert(this.message);
        }
      });
    } else {
      this.signsService.signin(this.username, this.password).subscribe({
        next: (res) => {
          this.message = 'Signin successful!';
          const token = res.token;
          const userRole = res.user?.role?.name;
          
    // Save token and role using AuthService
    this.authService.setSession(token, userRole);

          if (userRole === 'ADMIN') {
            this.router.navigate(['/admin-dashboard']);
          } else if (userRole === 'USER') {
            this.router.navigate(['/product-list']);
          } else if (userRole === 'VENDOR') {
            this.router.navigate(['/vendor-dashboard']);
          } else {
            alert('Unknown role: ' + userRole);
          }
        },
        error: (err) => {
          this.message = 'Signin failed: ' + (err.error?.message || 'Unknown error');
          alert(this.message);
        }
      });
    }
  }
}
