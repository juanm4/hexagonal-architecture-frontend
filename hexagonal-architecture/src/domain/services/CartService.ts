// src/domain/services/Cart.service.ts

import { Cart, ICart } from '../models/Cart';
import { Product } from '../models/Product';

const createCart = (): Cart => {
    return { id: Date.now().toString(), products: [] };
};

const hasProduct = (cart: Cart, product: Product): boolean => {
    return !!cart.products.find(item => item.id === product.id);
};

const isCartFull = (cart: Cart): boolean => {
    return cart.products.length >= 5;
};

const isCartLimitPriceExceeded = (cart: Cart, product: Product, limit: number): boolean => {
    let totalPriceCart = 0;
    cart.products.forEach(item => {
        totalPriceCart += item.price;
    });
    totalPriceCart += product.price;

    return totalPriceCart > limit;
};

const addProductToCart = (cart: Cart, product: Product): Cart => {
    if (!hasProduct(cart, product) && !isCartFull(cart) && !isCartLimitPriceExceeded(cart, product, 100))
        cart.products = [...cart.products, product];
    return { ...cart };
};

const removeProductFromCart = (cart: Cart, product: Product): Cart => {
    const productsWithRemovedItem: Product[] = [];
    cart.products.forEach(item => {
        if (item.id !== product.id) productsWithRemovedItem.push(item);
    });
    cart.products = [...productsWithRemovedItem];
    return { ...cart };
};

// This service must implement the operations defined for the Cart interface
export const cartService: ICart = {
    createCart,
    addProductToCart,
    removeProductFromCart
};
