import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PricePipe } from './pipes/price.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    NotFoundComponent,
    PricePipe,
    TruncatePipe,
    ProductCardComponent,
    CategoryCardComponent,
    SearchBarComponent,
    PaginationComponent,
    BreadcrumbComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
    
    
  ]

})
export class SharedModule { }
