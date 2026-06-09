import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  testimonials = [

    {
      name: 'Rahul Sharma',
      rating: 5,
      review: 'Amazing shopping experience and fast delivery.'
    },

    {
      name: 'Priya Patel',
      rating: 5,
      review: 'Premium quality products at great prices.'
    },

    {
      name: 'Amit Kumar',
      rating: 5,
      review: 'One of the best ecommerce experiences.'
    }

  ];

}