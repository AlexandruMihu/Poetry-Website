import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ColectieComponentComponent } from './Components/colectie-component/colectie-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore, FirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ColectiiService } from './Services/colectii.service';
import { UsersService } from './Services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ColectieComponentComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), provideFirebaseApp(() => initializeApp(environment.firebase)),
    FirebaseAppModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    FirestoreModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [ColectiiService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
