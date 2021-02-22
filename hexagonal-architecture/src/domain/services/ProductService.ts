// src/domain/services/ProductService.ts

import { ProductRepository } from '../repositories/ProductRepository';

// Here we can change the repository by one that implement the IProductRepository interface
//const repository: IProductRepository = productRepository;

export const productService = (repository: ProductRepository): ProductRepository => ({
    getProducts: () => {
        return repository.getProducts();
    },
    getProductsById: id => {
        return repository.getProductsById(id);
    }
});
