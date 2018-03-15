import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { IntroComponent } from './structure/intro/intro.component';
import { AboutComponent } from './structure/about/about.component';
import { FeaturesComponent } from './structure/features/features.component';
import { AdvancedFeaturesComponent } from './structure/advanced-features/advanced-features.component';
import { CallToActionComponent } from './structure/call-to-action/call-to-action.component';
import { MoreFeaturesComponent } from './structure/more-features/more-features.component';
import { ClientsComponent } from './structure/clients/clients.component';
import { PricingComponent } from './structure/pricing/pricing.component';
import { FaqComponent } from './structure/faq/faq.component';
import { TeamComponent } from './structure/team/team.component';
import { GalleryComponent } from './structure/gallery/gallery.component';
import { ContactComponent } from './structure/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    FeaturesComponent,
    AdvancedFeaturesComponent,
    CallToActionComponent,
    MoreFeaturesComponent,
    ClientsComponent,
    PricingComponent,
    FaqComponent,
    TeamComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
