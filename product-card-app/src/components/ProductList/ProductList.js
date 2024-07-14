import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import './ProductList.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const images = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
};

const ProductList = () => {
    const [products] = useState([
        {
            title: 'Wooden Chair',
            description: 'Made from high-quality wood, it features a classic design that fits perfectly in any room.',
            stock: true,
            image: images.img1,
        },
        {
            title: 'Office Chair',
            description: 'Big and Tall Office Chair Executive Office Chair with Foot Rest (Black).',
            stock: false,
            image: images.img2,
        },
        {
            title: 'Recliner Chair',
            description: 'Unwind in our luxurious recliner chair. Upholstered in soft fabric.',
            stock: true,
            image: images.img3,
        },
        {
            title: 'Rocking Chair',
            description: 'Its gentle rocking motion is perfect for reading or enjoying a quiet moment.',
            stock: true,
            image: images.img4,
        },
        {
            title: 'Dining Chair',
            description: 'Crafted from sturdy wood with a cushioned seat, it combines elegance.',
            stock: true,
            image: images.img5,
        },
        {
            title: 'Bar Stool',
            description: 'Featuring a sturdy frame and comfortable seat.',
            stock: false,
            image: images.img6,
        }
    ]);

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
