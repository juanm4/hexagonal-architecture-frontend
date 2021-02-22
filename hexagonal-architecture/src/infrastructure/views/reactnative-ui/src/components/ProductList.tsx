// src/infrastructure/views/reactnative-ui/src/components/ProductList.tsx

import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { Product } from '@domain/models/Product';
import { productService } from '@domain/services/ProductService';
import { productRepositoryFake } from '@infrastructure/instances/productRepositoryFake';

interface ProductListProps {
    onSelectProduct: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = useCallback(async () => {
        try {
            const responseProducts = await productService(productRepositoryFake).getProducts();
            setProducts(responseProducts);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    React.useEffect(() => {
        getProducts();
    }, []);

    const handleSelectProduct = (product: Product) => {
        onSelectProduct(product);
    };

    return (
        <View>
            <Text style={styles.title}>List of products</Text>
            <View>
                {products.map(product => (
                    <View style={styles.buttonProduct} key={product.id}>
                        <Button
                            onPress={() => {
                                handleSelectProduct(product);
                            }}
                            title={product.title}
                        >
                            <Text>{product.title}</Text>
                        </Button>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        margin: 5
    },
    buttonProduct: {
        margin: 5
    }
});
