import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'Rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isOpen: BehaviorSubject<boolean>;

  constructor(
    private _cart: CartService
  ) { }

  ngOnInit() {
    this.isOpen = this._cart.isOpen;
  }

  openCart() {
    this._cart.openCart();
  }

  closeCart() {
    this._cart.closeCart();
  }

}
