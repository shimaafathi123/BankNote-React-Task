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
            <div className="button-container">
                <button className="buy-button">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
                <button className="favorite-button">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
