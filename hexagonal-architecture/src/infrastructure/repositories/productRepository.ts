// src/infrastructure/repositories/productRepository.ts

import { Product } from '../../domain/models/Product';
import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { Http } from '../../domain/repositories/Http';
import { ProductDTO } from '../../infrastructure/http/dto/ProductDTO';

export const productRepository = (client: Http): ProductRepository => ({
    getProducts: async () => {
        const products = await client.get<ProductDTO>('');
        return products.map((productDto): Product => ({ id: productDto.id, title: productDto.title, price: productDto.price }));
    },

    getProductsById: async id => {
        const products = await client.get<ProductDTO>('', { id });
        return products.map((productDto): Product => ({ id: productDto.id, title: productDto.title, price: productDto.price }));
    }
});
