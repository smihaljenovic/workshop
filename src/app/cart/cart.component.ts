import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'Rxjs';
import { CartItem } from '../classes/cart-item';
import { Cart } from '../classes/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isOpen: BehaviorSubject<boolean>;
  cart: any;

  constructor(
    private _cart: CartService
  ) { }

  ngOnInit() {
    this.isOpen = this._cart.isOpen;
    this.cart = Cart;
  }

  openCart() {
    this._cart.openCart();
  }

  closeCart() {
    this._cart.closeCart();
  }

}
