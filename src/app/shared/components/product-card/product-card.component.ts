import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: Product;

  addToCart(): void {
    console.log('Add To Cart:', this.product);
  }

  viewProduct(): void {
    console.log('View Product:', this.product.id);
  }

  getDiscountPercentage(): number {

    if (!this.product.discountPrice) {
      return 0;
    }

    return Math.round(
      ((this.product.price - this.product.discountPrice) /
      this.product.price) * 100
    );
  }
}