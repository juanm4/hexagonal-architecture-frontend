// src/infrastructure/views/react-ui/src/App.tsx

import React, { useState } from 'react';
import { ProductList } from './views/ProductList';
import { Cart } from '@domain/models/Cart';
import { Product } from '@domain/models/Product';
import { cartService } from '@domain/services/CartService';

const App = () => {
    const [cart, setCart] = useState<Cart>(cartService.createCart());

    const handleAddToCart = (product: Product) => {
        setCart(cartService.addProductToCart(cart, product));
    };

    const handleRemoveToCart = (product: Product) => {
        setCart(cartService.removeProductFromCart(cart, product));
    };

    const renderCartProducts = (): JSX.Element[] => {
        const cartProducts: JSX.Element[] = [];
        let totalCart = 0;

        cart.products.forEach(product => {
            totalCart += product.price;
            cartProducts.push(
                <div key={product.id}>
                    <label>{product.title} </label>
                    <span>({product.price} €) </span>
                    <button onClick={() => handleRemoveToCart(product)}>remove</button>
                    <br />
                </div>
            );
        });

        cartProducts.push(
            <div key={'total'}>
                <br />
                <label>
                    <b>Total:</b>
                </label>
                <span>{totalCart} €</span>
                <br />
            </div>
        );
        return cartProducts;
    };

    return (
        <div>
            <h1>Shopping cart</h1>
            <h2>Products in the cart</h2>
            {renderCartProducts()}
            <ProductList onSelectProduct={handleAddToCart} />
        </div>
    );
};

export default App;
