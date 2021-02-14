// src/infrastructure/repositories/product.repository.ts

import { Product } from '../../domain/models/Product';
import { httpAxios } from '../http/httpAxios';
import { ProductDTO } from '../http/dto/ProductDTO';
import {IHttp} from "../http/http";
import {productListMock} from "../mocks/products";

export interface IProductRepository {
    getProducts: () => Promise<Product[]>;
    getProductsById: (id: string) => Promise<Product[]>;
}

// Here we can change the client by one that implement the IHttp interface
const httpClient: IHttp = httpAxios;

export const productRepository: IProductRepository = {
    getProducts: async () => {
        //const products = await httpClient.get<ProductDTO[]>('http://localhost/products');
        const products = productListMock;
        return products.map((productDto): Product => ({ id: productDto.id, title: productDto.title, price: productDto.price }));
    },

    getProductsById: async id => {
        //const products = await httpClient.get<ProductDTO[]>('http://localhost/products', { id });
        const products = productListMock;
        return products.map((productDto): Product => ({ id: productDto.id, title: productDto.title, price: productDto.price }));
    }
};
