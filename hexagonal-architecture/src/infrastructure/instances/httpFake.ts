// src/infrastructure/instances/httpAxios.ts

import { Http } from '../../domain/repositories/Http';
import { productListMock } from '../../mocks/products';

export const httpFake: Http = {
    get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await productListMock;
        return response;
    },
    post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
        const response = await productListMock;
        return response;
    },
    put: async <T>(path: string, params?: Record<string, any>, config?: any) => {},
    delete: async <T>(path: string, params?: any, config?: any) => {}
};
