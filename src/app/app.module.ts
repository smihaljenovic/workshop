import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { ApiService } from './services/api.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CartService,
    ProductService,
    CategoryService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
