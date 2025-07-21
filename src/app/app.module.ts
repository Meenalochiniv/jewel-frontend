import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { AdmiComponent } from './admin-dashboard/admi.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    HomeComponent,
    LoginComponent,
    FeedbackComponent,
    ProductComponent,
    VendorComponent,
    CustomerComponent,
    AdminComponent,
    SignComponent,
    AdmiComponent,
    VendorDashboardComponent,
    ProductListComponent,
    FeedbackListComponent,
    CheckoutComponent,
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
