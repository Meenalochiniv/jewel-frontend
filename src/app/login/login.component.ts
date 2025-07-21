import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = 'admin'; 

  constructor(private router: Router) {}

  onLogin() {
   
    if (this.username && this.password) {
      console.log(`Logged in as ${this.role}`);
      this.router.navigate([`/${this.role}`]);

    } else {
      alert('Please enter valid credentials.');
    }
  }
}
