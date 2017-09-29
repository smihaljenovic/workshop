import { Product } from './product';
import { Category } from './category';
import { Size } from './size.enum';
import { Cart } from './cart';

export class Shirt extends Product {

    sizes: string[]
    selectedSize: string

    constructor(init: any, category: Category) {
        super(init, category);
        this.sizes = init.sizes;
    }

    toJson() {
        let json = super.toJson();
        json['sizes'] = this.sizes;
        return json;
    }

    addToCart() {
        let foundItem = Cart.items.find(cartItem => cartItem.product == this);
        if(foundItem) {
            foundItem.qty += 1;
            foundItem.subtotal = foundItem.qty * this.price;
        } else {
            Cart.items.push({
                product: this,
                qty: 1,
                subtotal: this.price
            })
        }
    }

}
