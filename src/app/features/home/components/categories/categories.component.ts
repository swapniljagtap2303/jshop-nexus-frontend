import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {
  categories = [
    { name: 'Mobiles',     icon: 'bi-phone',    iconBg: '#EEF2FF', iconColor: '#4F46E5', count: '2,400+ products',  badge: 'HOT',  badgeClass: 'badge-hot'  },
    { name: 'Laptops',     icon: 'bi-laptop',    iconBg: '#EFF6FF', iconColor: '#2563EB', count: '980+ products',    badge: '',     badgeClass: ''            },
    { name: 'Fashion',     icon: 'bi-bag',            iconBg: '#FDF2F8', iconColor: '#DB2777', count: '12,000+ styles',  badge: 'SALE', badgeClass: 'badge-sale'  },
    { name: 'Electronics', icon: 'bi-headphones',       iconBg: '#ECFDF5', iconColor: '#059669', count: '5,300+ products', badge: '',     badgeClass: ''            },
    { name: 'Gaming',      icon: 'bi-controller', iconBg: '#FFF7ED', iconColor: '#EA580C', count: '1,800+ items',    badge: 'NEW',  badgeClass: 'badge-new'   },
    { name: 'Books',       icon: 'bi-book',           iconBg: '#F5F3FF', iconColor: '#7C3AED', count: '45,000+ titles',  badge: '',     badgeClass: ''            },
  ];

  onCategoryClick(cat: any) {
    console.log('Clicked:', cat.name);
  }
}
