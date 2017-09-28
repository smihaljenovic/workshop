import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { BehaviorSubject } from 'Rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: BehaviorSubject<string>;
  categories: string[];

  constructor(
    private _category: CategoryService
  ) { }

  ngOnInit() {
    this.selectedCategory = this._category.selectedCategory;
    this.categories = this._category.categories;
  }

  setCategory(category: string) {
    this._category.setCategory(category);
  }

}
