import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './Product/products/products.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './Product/show-details/show-details.component';
import { CategoryComponent } from './categories/category/category.component';
import { CatDetailsComponent } from './categories/cat-details/cat-details.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    ProductsComponent,
    HomeComponent,
    ShowDetailsComponent,
    CategoryComponent,
    CatDetailsComponent,
    PaymentComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
