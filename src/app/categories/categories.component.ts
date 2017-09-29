import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { BehaviorSubject } from 'Rxjs';
import { Category } from '../classes/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: BehaviorSubject<Category>;

  constructor(
    private _category: CategoryService
  ) { }

  ngOnInit() {
    this.selectedCategory = this._category.selectedCategory;
  }

  setCategory(category: Category) {
    this._category.setCategory(category);
  }

}
