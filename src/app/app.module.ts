import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { MovicesComponent } from './movices/movices.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { PepoleComponent } from './pepole/pepole.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvComponent,
    MovicesComponent,
    NetworkComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    PepoleComponent,
    HomeheaderComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
    PersonDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{ }
