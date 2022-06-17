import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ParagraphHeadingComponent } from './paragraph-heading/paragraph-heading.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CardsComponent } from './cards/cards.component';
import { SocialLogoComponent } from './social-logo/social-logo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDirective } from './project.directive';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutMeComponent,
    ParagraphHeadingComponent,
    ParagraphComponent,
    CardsComponent,
    SocialLogoComponent,
    PortfolioComponent,
    ProjectDirective,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
