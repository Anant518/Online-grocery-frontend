import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './Product/products/products.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent} from './Product/show-details/show-details.component';
import { CategoryComponent} from './categories/category/category.component';
import { CatDetailsComponent } from './categories/cat-details/cat-details.component';
import { PaymentComponent } from './payment/payment.component';
import { NavComponent } from './nav/nav.component'



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductsComponent},
//   {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'showdetails', component: ShowDetailsComponent},
  {path: 'category', component: CategoryComponent},
  { path: 'categoryDetails', component:CatDetailsComponent},
  { path:'payment',component:PaymentComponent},
  {path:'nav',component:NavComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }