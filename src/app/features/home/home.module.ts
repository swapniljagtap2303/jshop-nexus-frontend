import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TrendingProductsComponent } from './components/trending-products/trending-products.component';
import { OfferBannerComponent } from './components/offer-banner/offer-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    TrendingProductsComponent,
    OfferBannerComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    NewsletterComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
