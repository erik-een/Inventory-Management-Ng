import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InventoriesModule } from './inventories/inventories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: 'AIzaSyAAeiDkRDAxZ9LsfZSt80tMc_gScLybe5o',
  authDomain: 'inventory-management-erikeen.firebaseapp.com',
  databaseURL:
    'https://inventory-management-erikeen-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'inventory-management-erikeen',
  storageBucket: 'inventory-management-erikeen.appspot.com',
  messagingSenderId: '872607593012',
  appId: '1:872607593012:web:3fb68ba1a0b92d27a59061',
  measurementId: 'G-LK0TM9BLDZ',
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    InventoriesModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
