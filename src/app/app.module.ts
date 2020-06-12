import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//
//
import { environment } from '../environments/environment';
//
//FIREBASE
import { AngularFireModule } from '@angular/fire';
//
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
//
import { AuthService } from './service/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
