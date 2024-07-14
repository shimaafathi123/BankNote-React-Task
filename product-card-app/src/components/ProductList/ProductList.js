import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/productData'; 
import './ProductList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    stock={product.stock}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ProductList;
