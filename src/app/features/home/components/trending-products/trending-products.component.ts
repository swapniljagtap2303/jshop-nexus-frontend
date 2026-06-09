import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss']
})
export class TrendingProductsComponent {

  products = [

  
    {
    name: 'Samsung S25 Ultra',
    description: 'Latest Samsung flagship smartphone featuring advanced AI capabilities and an ultra-clear camera system.',
    price: 119999,
    oldPrice: 129999,
    imageUrls: ['assets/images/products/samsung.png']
  },
  {
    name: 'MacBook Air M4',
    description: 'Strikingly thin Apple laptop powered by the next-generation M4 chip for exceptional speed and battery life.',
    price: 109999,
    oldPrice: 129999,
    imageUrls: ['assets/images/products/macbook.png']
  },
  {
    name: 'Sony Headphones',
    description: 'Premium wireless over-ear headphones featuring industry-leading noise cancellation and high-resolution audio.',
    price: 19999,
    oldPrice: 24999, 
    imageUrls: ['assets/images/products/sony.png']
  },
  {
    name: 'Apple Watch Ultra',
    description: 'Rugged and capable Apple smartwatch built for endurance, exploration, and outdoor adventures.',
    price: 79999,
    oldPrice: 89999, 
    imageUrls: ['assets/images/products/watch.png']
  },
 {
    name: 'Samsung S25 Ultra',
    description: 'Latest Samsung flagship smartphone featuring advanced AI capabilities and an ultra-clear camera system.',
    price: 119999,
    oldPrice: 129999,
    imageUrls: ['assets/images/products/samsung.png']
  },
  {
    name: 'MacBook Air M4',
    description: 'Strikingly thin Apple laptop powered by the next-generation M4 chip for exceptional speed and battery life.',
    price: 109999,
    oldPrice: 129999,
    imageUrls: ['assets/images/products/macbook.png']
  },
  {
    name: 'Sony Headphones',
    description: 'Premium wireless over-ear headphones featuring industry-leading noise cancellation and high-resolution audio.',
    price: 19999,
    oldPrice: 24999, 
    imageUrls: ['assets/images/products/sony.png']
  },
  {
    name: 'Apple Watch Ultra',
    description: 'Rugged and capable Apple smartwatch built for endurance, exploration, and outdoor adventures.',
    price: 79999,
    oldPrice: 89999, 
    imageUrls: ['assets/images/products/watch.png']
  }

  ];

}