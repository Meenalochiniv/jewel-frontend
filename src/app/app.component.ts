import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // adjust path if needed
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jewel';
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}





