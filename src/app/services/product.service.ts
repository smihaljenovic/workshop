import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CategoryService } from './category.service';
import { BehaviorSubject } from 'Rxjs';
import { Product } from '../classes/product';
import { Shirt } from '../classes/shirt';
import { Sticker } from '../classes/sticker';

@Injectable()
export class ProductService {

  products: any[];
  loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _api: ApiService,
    private _category: CategoryService
  ) {
    this._category.loaded.subscribe(isLoaded => {
      if(isLoaded) this.loadProducts();
    })
  }

  loadProducts() {
    return this._api.get('assets/api/products.json').subscribe(data => {
      this.products = data.map(product => {
        if(product.category == 1 || product.category == 2) return new Shirt(product, this._category.categories.find(category => category.id == product.category))
        else if(product.category == 3) return new Sticker(product, this._category.categories.find(category => category.id == product.category))
      });
      this.loaded.next(true);
    })
  }

}
