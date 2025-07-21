import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  backgroundUrl: string = 'https://t4.ftcdn.net/jpg/02/49/10/41/360_F_249104183_IyuURKVYVxpVvPThG59GiA1fSWhffzln.jpg';
  constructor(private router: Router) {}
  navigateToProducts(): void {
  this.router.navigate(['/product-list']);
}

}