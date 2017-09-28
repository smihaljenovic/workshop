import { Component, OnInit, ViewChild } from '@angular/core';

import * as Isotope from 'isotope-layout';
import * as imagesLoaded from 'imagesloaded';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('grid') gridEl: any;
  isotope: any;

  constructor(
    private _category: CategoryService,
    private _product: ProductService
  ) { }

  ngOnInit() {
    this._product.loaded.subscribe(checkIfLoaded => {
      checkIfLoaded && setTimeout(() => {
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
      })
    })
    this._category.selectedCategory.subscribe(category => {
      if(category) this.filter('.category_' + category.id);
      else this.filter('*');
    })
  }

  filter(items) {
    if(!this.isotope) return;
    this.isotope.arrange({
      filter: items
    });
    this.isotope.layout();
  }

}
