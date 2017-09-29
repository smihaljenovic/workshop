import { CartItem } from './cart-item';

export class Cart {

    static items: CartItem[] = [];
    
    static getTotal() {
        return this.items.reduce((sum, cartItem) => {
            return sum + cartItem.subtotal;
        }, 0);
    }

    static removeFromCart(cartItem: CartItem) {
        Cart.items.splice(Cart.items.indexOf(cartItem), 1);
    }

}
