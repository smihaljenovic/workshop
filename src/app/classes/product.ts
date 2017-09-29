import { Category } from './category';
import { Cart } from './cart';
export class Product {

    id: number;
    title: string;
    brand: string;
    price: number = 0;
    featured: boolean = false;
    category: Category;
    image: string;

    constructor(
        init: any,
        category: Category
    ) {
        this.id = init.id;
        this.title = init.title;
        this.brand = init.brand;
        this.price = init.price;
        this.featured = init.featured;
        this.image = init.image;
        this.category = category;
    }

    toJson() {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            category: this.category.id
        }
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
