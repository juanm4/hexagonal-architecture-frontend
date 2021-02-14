// src/infrastructure/http/http.d.ts

export interface IHttp {
    get: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    post: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    put: <T>(path: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
    delete: <T>(path: string, params?: any, config?: any) => Promise<T | any>;
}
