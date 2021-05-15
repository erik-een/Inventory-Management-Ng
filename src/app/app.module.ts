import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InventoriesModule } from './inventories/inventories.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule} from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrdersModule } from './firebasetest/orders.module';
import { OrdersService } from './firebasetest/orders-service/orders.service';

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
    FlexLayoutModule,
    OrdersModule,
  ],
  providers: [OrdersService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
