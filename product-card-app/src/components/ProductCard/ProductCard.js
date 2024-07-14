import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

const ProductCard = ({ title, description, stock, image }) => {
    return (
        <Card className="product-card">
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>
                    {title}
                    <Button variant="link" className="favorite-button">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </Button>
                </Card.Title>
                <Card.Text className="desc">{description}</Card.Text>
                <p className={`stock-status ${stock ? 'in-stock' : 'out-of-stock'}`}>
                    {stock ? 'In Stock' : 'Out of Stock'}
                </p>
                <Button variant="success" className="buy-button">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
