import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, AppMaterialModule, FlexLayoutModule],
  exports: [FooterComponent, HeaderComponent, NavbarComponent],
})
export class SharedModule {}
