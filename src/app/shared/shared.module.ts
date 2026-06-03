import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PricePipe } from './pipes/price.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    NotFoundComponent,
    PricePipe,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
