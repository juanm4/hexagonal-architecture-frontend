// src/domain/models/Carts.ts

import { Product } from './Product';

// This interface define what operations we can perform on a Cart
export interface ICart {
    createCart: () => Cart;
    addProductToCart: (cart: Cart, product: Product) => Cart;
    removeProductFromCart: (cart: Cart, product: Product) => Cart;
}

export type Cart = {
    id: string;
    products: Product[];
};
