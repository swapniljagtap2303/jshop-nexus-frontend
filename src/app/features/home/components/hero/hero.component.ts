import { Component, OnInit, OnDestroy } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {

  currentSlide = 0;
  prevSlideIndex = -1;
  private autoplayInterval: any;

  stats = [
    { number: '50K+', label: 'Products' },
    { number: '4.9★', label: 'Rating' },
    { number: '2M+', label: 'Customers' }
  ];

  slides = [
    { image: 'assets/images/hero-product-6.png', label: 'Sneakers' },
    { image: 'assets/images/hero-product-5.png', label: 'Electronics' },
    { image: 'assets/images/hero-product-4.png', label: 'Audio' }
  ];

  ngOnInit(): void {
    AOS.init({ once: true, offset: 80 });
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayInterval);
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => this.nextSlide(), 3500);
  }

  nextSlide(): void {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.prevSlideIndex = this.currentSlide;
    this.currentSlide = index;
  }
}