<!--
// src/infrastructure/components/ProductList.vue
-->
<template>
    <div>
        <h2>List of products</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                <button @click="handleSelectProduct(product)">{{ product.title }}</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { productService } from '@/domain/services/Product.service';
import { Product } from '@/domain/models/Product';

type DataProps = {
    products: Product[];
};

export default {
    name: 'ProductList',
    data(): DataProps {
        return {
            products: []
        };
    },
    mounted() {
        productService.getProducts().then(response => (this.products = response));
    },
    methods: {
        handleSelectProduct(product: Product) {
            this.$emit('onSelectProduct', product);
        }
    }
};
</script>
