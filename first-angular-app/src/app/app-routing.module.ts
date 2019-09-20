import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
   { path: '', redirectTo:'/', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'products',component: ProductsComponent },
  {path: 'login',component: LoginComponent },
  {path: 'register',component: RegisterComponent },
  {path: 'categories',component:  CategoriesComponent},
  {path: 'cart',component: CartComponent},
  {path: 'payments',component: PaymentsComponent},
  { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: '' },
  {path:'contact-us',component:ContactusComponent },
  { path: 'user-list', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}