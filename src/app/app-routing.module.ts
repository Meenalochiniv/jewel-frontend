import { NgModule } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { AdmiComponent } from './admin-dashboard/admi.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
    
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { role: 'USER' }
  },

  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuard],
    data: { role: 'USER' }
  },

  {
    path: 'billing',
    component: BillingComponent,
    canActivate: [AuthGuard],
    data: { role: 'USER' }
  },

  {
    path: 'admin-dashboard',
    component: AdmiComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' }
  },

  {
    path: 'feedback-list',
    component: FeedbackListComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' }
  },

  {
    path: 'vendor-dashboard',
    component: VendorDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'VENDOR' }
  },

  {
    path: 'Sign',
    component: SignComponent
  },
  { path: 'billing', component: BillingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent},
  { path: 'product', component: ProductComponent},
  { path: 'vendor', component: VendorComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'sign', component: SignComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'feedback-list', component: FeedbackListComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdmiComponent },
    
  { path: '', component: VendorComponent }, 
  { path: 'vendor-dashboard', component: VendorDashboardComponent },
      
  { path: '', redirectTo: '/vendor', pathMatch: 'full' },
  { path: '', component: ProductComponent },

  { path: '', component: ProductListComponent },
  { path: 'checkout', component: CheckoutComponent },

  

    {
      path: '**',
      redirectTo: 'sign'
    }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
