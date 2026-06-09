import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductSearchComponent,
    ProductFiltersComponent,
    ProductSortComponent,
    ProductGalleryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
