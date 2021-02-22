// src/infrastructure/views/reactnative-ui/App.tsx

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cart } from '@domain/models/Cart';
import { cartService } from '@domain/services/CartService';
import { Product } from '@domain/models/Product';
import { ProductList } from '@/components/ProductList';

const App = () => {
    const [cart, setCart] = useState<Cart>(cartService.createCart());

    const handleAddToCart = (product: Product) => {
        setCart(cartService.addProductToCart(cart, product));
    };

    const handleRemoveToCart = (product: Product) => {
        setCart(cartService.removeProductFromCart(cart, product));
    };

    const renderCartProducts = (): JSX.Element[] => {
        const cartProducts: JSX.Element[] = [];
        let totalCart = 0;

        cart.products.forEach(product => {
            totalCart += product.price;
            cartProducts.push(
                <View style={styles.productInCart} key={product.id}>
                    <Text>{product.title} </Text>
                    <Text>({product.price} €) </Text>
                    <Button color={'red'} onPress={() => handleRemoveToCart(product)} title={'remove'} />
                </View>
            );
        });

        cartProducts.push(
            <View style={styles.productInCart} key={'total'}>
                <Text>Total:</Text>
                <Text> {totalCart} €</Text>
            </View>
        );
        return cartProducts;
    };

    return (
        <>
            <StatusBar barStyle='default' />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
                    <Text style={styles.titlePage}>Shopping cart</Text>
                    <Text style={styles.title}>Products in the car</Text>
                    {renderCartProducts()}
                    <ProductList onSelectProduct={handleAddToCart} />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    titlePage: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 20
    },
    title: {
        fontWeight: 'bold',
        margin: 5
    },
    productInCart: {
        flexDirection: 'row',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        margin: 10
    }
});

export default App;
