import { Component, OnInit, ViewChild } from '@angular/core';

import * as Isotope from 'isotope-layout';
import * as imagesLoaded from 'imagesloaded';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('grid') gridEl: any;
  isotope: any;

  constructor(
    private _category: CategoryService
  ) { }

  ngOnInit() {
    imagesLoaded(this.gridEl.nativeElement, () => {
      this.isotope = new Isotope(this.gridEl.nativeElement, {
        isResizeBound: false,
        itemSelector: '.grid__item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid__sizer'
        },
        transitionDuration: '0.6s'
      });
      this.gridEl.nativeElement.classList.remove('grid--loading');
    })
    this._category.selectedCategory.subscribe(category => {
      if(category) this.filter('.' + this.getClassName(category));
      else this.filter('*');
    })
  }

  getClassName(category: string) {
    return category.toLowerCase().replace(' ', '');
  }

  filter(items) {
    if(!this.isotope) return;
    this.isotope.arrange({
      filter: items
    });
    this.isotope.layout();
  }

}
