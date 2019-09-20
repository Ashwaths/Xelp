import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { path: '**', redirectTo: '' },
  {
    path:'contact-us',component:ContactusComponent
  },
  { path: 'user-list', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}