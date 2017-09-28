import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  categories: any[];
  selectedCategory: BehaviorSubject<any> = new BehaviorSubject(null);
  loaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _api: ApiService,
  ) {
    this.loadCategories();
  }

  setCategory(category: string) {
    this.selectedCategory.next(category);
  }

  loadCategories() {
    return this._api.get('assets/api/categories.json').subscribe(data => {
      this.categories = data;
      this.loaded.next(true);
    })
  }

}
