import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { HealthComponent } from './health/health.component';
import { LifeComponent } from './life/life.component';
import { HouseComponent } from './house/house.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    HomeComponent,
    WorkComponent,
    HealthComponent,
    LifeComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
