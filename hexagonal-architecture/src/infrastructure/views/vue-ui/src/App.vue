<!--
// src/infrastructure/views/vue-ui/src/App.vue
-->
<template>
    <div id="app">
        <h1>Shopping cart</h1>
        <h2>Products in the cart</h2>
        <div v-for="product in cart.products" :key="product.id">
            <label>{{ product.title }} </label>
            <span>({{ product.price }} €) </span>
            <button @click="handleRemoveProductFromCart(product)">remove</button>
            <br />
        </div>
        <div>
            <br />
            <label>
                <b>Total:</b>
            </label>
            <span>{{ getTotalCart() }} €</span>
            <br />
        </div>
        <ProductList @onSelectProduct="handleAddProductToCart" />
    </div>
</template>

<script lang="ts">
import { Cart } from '@domain/models/Cart';
import { cartService } from '@domain/services/CartService';
import { Product } from '@domain/models/Product';
import ProductList from '@/views/ProductList.vue';

type DataProps = {
    cart: Cart;
};

export default {
    components: {
        ProductList
    },
    data(): DataProps {
        return {
            cart: cartService.createCart()
        };
    },
    mounted() {
        this.cart = cartService.createCart();
    },
    methods: {
        handleAddProductToCart(product: Product) {
            this.cart = cartService.addProductToCart(this.cart, product);
        },
        handleRemoveProductFromCart(product: Product) {
            this.cart = cartService.removeProductFromCart(this.cart, product);
        },
        getTotalCart() {
            let totalCart = 0;
            this.cart.products.forEach(product => {
                totalCart += product.price;
            });
            return totalCart;
        }
    }
};
</script>
