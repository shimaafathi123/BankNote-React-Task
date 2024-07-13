import React from 'react';
import './ProductCard.css'
const ProductCard = ({ title, description, stock, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className={`stock-status ${stock ? 'in-stock' : 'out-of-stock'}`}>
                {stock ? 'In Stock' : 'Out of Stock'}
            </p>
        </div>
    );
};

export default ProductCard;
