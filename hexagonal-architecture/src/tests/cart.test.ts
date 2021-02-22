// src/tests/cart.test.ts

import { cartService } from '../domain/services/CartService';
import { Product } from '../domain/models/Product';

const anyProduct = (id: string, price: number): Product => ({
    id,
    title: 'Any title',
    price
});

test('If I add more than five products, the sixth will not be added', async () => {
    const cart = cartService.createCart();

    cartService.addProductToCart(cart, anyProduct('1', 0));
    cartService.addProductToCart(cart, anyProduct('2', 0));
    cartService.addProductToCart(cart, anyProduct('3', 0));
    cartService.addProductToCart(cart, anyProduct('4', 0));
    cartService.addProductToCart(cart, anyProduct('5', 0));
    cartService.addProductToCart(cart, anyProduct('6', 0));
    expect(cart.products.length).toEqual(5);
});

test('If I add a product and it already exist in the cart, the product will not be added', async () => {
    const cart = cartService.createCart();

    cartService.addProductToCart(cart, anyProduct('1', 0));
    cartService.addProductToCart(cart, anyProduct('1', 0));
    expect(cart.products.length).toEqual(1);
});

test('If I add a product and it will exceed 100€, the product will not be added', async () => {
    const cart = cartService.createCart();

    cartService.addProductToCart(cart, anyProduct('1', 50));
    cartService.addProductToCart(cart, anyProduct('2', 60));
    expect(cart.products.length).toEqual(1);
});
