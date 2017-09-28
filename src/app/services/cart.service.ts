import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class CartService {

  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  openCart() {
    this.isOpen.next(true);
  }

  closeCart() {
    this.isOpen.next(false);
  }

}
