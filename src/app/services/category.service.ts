import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class CategoryService {

  categories: string[] = ['Jackets', 'Shirts', 'Dresses', 'Trousers', 'Shoes'];
  selectedCategory: BehaviorSubject<string> = new BehaviorSubject('');  

  constructor() { }

  setCategory(category: string) {
    this.selectedCategory.next(category);
  }

}
