import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule}    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
//import { CarouselComponent } from './carousel/carousel.component'; 

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InterceptorService } from './services/interceptor.service';
import { UserService } from './services/user.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { ToastrModule } from 'ngx-toastr';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot() ,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CarouselComponent,
    ContactusComponent
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ], 
  bootstrap: [ AppComponent ]
})

export class AppModule { }