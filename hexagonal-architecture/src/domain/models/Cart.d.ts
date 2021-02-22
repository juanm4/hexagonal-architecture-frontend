import { Product } from './Product';
export interface ICart {
    createCart: () => Cart;
    addProductToCart: (cart: Cart, product: Product) => Cart;
    removeProductFromCart: (cart: Cart, product: Product) => Cart;
}
export declare type Cart = {
    id: string;
    products: Product[];
};
