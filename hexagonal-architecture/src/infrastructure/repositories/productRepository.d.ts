import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { Http } from '../../domain/repositories/Http';
export declare const productRepository: (client: Http) => ProductRepository;
