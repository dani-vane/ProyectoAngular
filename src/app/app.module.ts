import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { HomeComponent } from './paginas/home/home.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { LoginComponent } from './paginas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//servicios

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    HomeComponent,
    ServiciosComponent,
    BlogComponent,
    ContactanosComponent,
    LoginComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    provideFirebaseApp(() => initializeApp({"projectId":"angular-proyecto-58980","appId":"1:646702747655:web:cdf02468ebf0a30a05daa2","storageBucket":"angular-proyecto-58980.appspot.com","apiKey":"AIzaSyCbKTImwijqzeA1P9slsWryiVhNAyhZ4zM","authDomain":"angular-proyecto-58980.firebaseapp.com","messagingSenderId":"646702747655","measurementId":"G-Y2SLFBJRSM"})),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
