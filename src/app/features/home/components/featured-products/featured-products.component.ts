import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ProductCardItem {
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  discountPrice: number;
  imageUrls: string[];
}

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedProductsComponent {
  readonly products: ProductCardItem[] = [
    {
      name: 'iPhone 16 Pro',
      description: 'Experience the ultimate Apple flagship with advanced Pro camera capabilities and blazing-fast performance.',
      price: 149999,
      oldPrice: 169999,
      discountPrice: 129999,
      imageUrls: [
        'assets/images/products/iphone.png'
      ]
    },
    {
      name: 'Samsung S25 Ultra',
      description: 'Unleash productivity and epic photography with the premium Android powerhouse featuring an integrated S-Pen.',
      price: 129999,
      oldPrice: 169999,
      discountPrice: 119999,
      imageUrls: [
        'assets/images/products/samsung.png'
      ]
    },
    {
      name: 'MacBook Air M4',
      description: 'Tackle heavy workflows and daily tasks with the incredibly light, all-day battery laptop powered by the M4 chip.',
      price: 169999,
      oldPrice: 169999,
      discountPrice: 149999,
      imageUrls: [
        'assets/images/products/macbook.png'
      ]
    },
    {
      name: 'AirPods Pro',
      description: 'Immerse yourself in high-fidelity audio with active noise cancellation and a customizable, comfortable fit.',
      price: 29999,
      oldPrice: 169999,
      discountPrice: 24999,
      imageUrls: [
        'assets/images/products/airpods.png'
      ]
    }
  ];

  trackByProduct(_: number, product: ProductCardItem): string {
    return product.name;
  }

  getDiscount(p: ProductCardItem): number {
  return Math.round(((p.price - p.discountPrice) / p.price) * 100);
}

onProductClick(p: ProductCardItem): void {
  console.log('Clicked:', p.name);
}

onImgError(event: Event): void {
  (event.target as HTMLImageElement).style.display = 'none';
}
}
