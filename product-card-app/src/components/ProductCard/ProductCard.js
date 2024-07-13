import React from 'react';
import './ProductCard.css'
const ProductCard = ({ title, description, stock, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{stock ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    );
};

export default ProductCard;
