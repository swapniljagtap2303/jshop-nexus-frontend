import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    placeholders = [
    'Search Samsung S25 Ultra...',
    'Search iPhone 17...',
    'Search Smart Watches...',
    'Search Laptops...',
    'Search Headphones...',
    'Search Shoes...'
  ];

  currentPlaceholder = this.placeholders[0];

  private currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.placeholders.length;

      this.currentPlaceholder =
        this.placeholders[this.currentIndex];
    }, 2500); // 2.5 sec
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  drawerOpen = false;

  openDrawer(): void {
    this.drawerOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeDrawer(): void {
    this.drawerOpen = false;
    document.body.style.overflow = '';
  }

  

}
