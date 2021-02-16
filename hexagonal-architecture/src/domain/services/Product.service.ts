// src/domain/services/Product.service.ts

import { IProductRepository, productRepository } from '../../infrastructure/repositories/product.repository';

// Here we can change the repository by one that implement the IProductRepository interface
const repository: IProductRepository = productRepository;

export const productService: IProductRepository = {
    getProducts: () => {
        return repository.getProducts();
    },
    getProductsById: id => {
        return repository.getProductsById(id);
    }
};
