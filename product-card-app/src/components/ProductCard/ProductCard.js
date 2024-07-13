import React from 'react';
import './ProductCard.css'
const ProductCard = ({ title, description, stock, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h2>
                {title}
                <button className="favorite-button">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                </button>
            </h2>
            <p>{description}</p>
            <p className={`stock-status ${stock ? 'in-stock' : 'out-of-stock'}`}>
                {stock ? 'In Stock' : 'Out of Stock'}
            </p>
            <button className="buy-button">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
        </div>
    );
};


export default ProductCard;
