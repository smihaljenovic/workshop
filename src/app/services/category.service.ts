import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Category } from '../classes/category';

@Injectable()
export class CategoryService {

  categories: Category[];
  selectedCategory: BehaviorSubject<Category> = new BehaviorSubject(null);
  loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _api: ApiService,
  ) {
    this.loadCategories();
  }

  setCategory(category: Category) {
    this.selectedCategory.next(category);
  }

  loadCategories() {
    return this._api.get('assets/api/categories.json').subscribe(data => {
      this.categories = data.map(item => new Category(item));
      this.loaded.next(true);
    })
  }

}
