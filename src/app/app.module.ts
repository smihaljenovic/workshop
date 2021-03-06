import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { ApiService } from './services/api.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './services/category.service';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    ProductService,
    CategoryService,
    ApiService,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
