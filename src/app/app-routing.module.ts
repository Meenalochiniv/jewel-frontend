import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  { path: 'billing', component: BillingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent},
  { path: 'product', component: ProductComponent},
  { path: 'vendor', component: VendorComponent},
  { path: 'customer', component: CustomerComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
