// src/infrastructure/repositories/product.repository.ts

import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { Http } from '../../domain/repositories/Http';
import { httpFake } from '../../infrastructure/instances/httpFake';
import { productRepository } from '../../infrastructure/repositories/productRepository';

const client: Http = httpFake;

export const productRepositoryFake: ProductRepository = productRepository(client);
