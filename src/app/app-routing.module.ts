import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseAdoptionComponent } from './choose-adoption/choose-adoption.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import { DisplayCardComponent } from './Components/display-card/display-card.component';
import { CardComponent } from './Components/card/card.component';
import { ChooseAdoptionTypeComponent } from './Components/choose-adoption-type/choose-adoption-type.component';
import { FindHomeComponent } from './Components/find-home/find-home.component';
import { KnowMoreComponent } from './Components/know-more/know-more.component';
import { AdoptMeComponent } from './Components/adopt-me/adopt-me.component';
import {computeMsgId} from '@angular/compiler';
import {ConnectOwnerComponent} from './Components/connect-owner/connect-owner.component';
const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: BlogComponent },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'choose-adoption', component: ChooseAdoptionComponent },
  { path: 'card', component: CardComponent },
  { path: 'display-card', component: DisplayCardComponent },
  { path: 'choose-type', component: ChooseAdoptionTypeComponent },
  { path: 'find-home', component: FindHomeComponent },
  { path: 'know-more', component: KnowMoreComponent },
  { path: 'adopt-me', component: AdoptMeComponent },
  { path: 'connect-owner', component: ConnectOwnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AboutUsComponent,
  ContactUsComponent,
  HomeComponent,
  BlogComponent,
  LoginComponent,
  SignUpComponent,
  ChooseAdoptionComponent,
  CardComponent,
  DisplayCardComponent,
  ChooseAdoptionTypeComponent,
  FindHomeComponent,
  KnowMoreComponent,
  ConnectOwnerComponent
];

