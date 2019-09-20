import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule}    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http'; 
import { InterceptorService } from './services/interceptor.service';
import { UserService } from './services/user.service';
import {RouterTestingModule} from '@angular/router/testing';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { MessagesComponent }    from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { CategoriesComponent } from './categories/categories.component';
import { PaymentsComponent } from './payments/payments.component';
const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyComponentComponent,
    MessagesComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ContactusComponent,
    CategoriesComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterTestingModule,
    RouterModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
