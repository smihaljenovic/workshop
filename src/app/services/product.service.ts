import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CategoryService } from './category.service';
import { BehaviorSubject } from 'Rxjs';

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
      this.products = data;
      this.loaded.next(true);
    })
  }

}
