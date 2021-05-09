import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './buttons/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MessageService } from './message/message.service';
import { MessageComponent } from './message/message/message.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MessageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, FooterComponent, HeaderComponent, NavbarComponent],
  providers: [MessageService],
})
export class SharedModule {}
