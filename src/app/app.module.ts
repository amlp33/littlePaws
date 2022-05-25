import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { TestPipePipe } from './Pipes/test-pipe.pipe';
import { CardComponent } from './Components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BlogComponent } from './Components/blog/blog.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarMenuDirective } from './directives/navbar-menu.directive';
import { ChooseAdoptionComponent } from './choose-adoption/choose-adoption.component';
import { MatMenuModule } from '@angular/material/menu';
import { DisplayCardComponent } from './Components/display-card/display-card.component';
import { ChooseAdoptionTypeComponent } from './Components/choose-adoption-type/choose-adoption-type.component';
import { AdoptMeComponent } from './Components/adopt-me/adopt-me.component';
import { KnowMoreComponent } from './Components/know-more/know-more.component';
import { ConnectOwnerComponent } from './Components/connect-owner/connect-owner.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    TestPipePipe,
    CardComponent,
    NavbarMenuDirective,
    ChooseAdoptionComponent,
    BlogComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    DisplayCardComponent,
    ChooseAdoptionTypeComponent,
    AdoptMeComponent,
    KnowMoreComponent,
    ConnectOwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [DisplayCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
