import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import './ProductList.css'


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
            description: 'Enjoy comfort and style with our wooden chair. Made from high-quality wood, it features a classic design that fits perfectly in any room. Ideal for dining, relaxing, or working, this chair combines durability with a timeless look.',
            stock: true,
            image: images.img1,
        },
        {
            title: 'Office Chair',
            description: 'Office Chair, Big and Tall Office Chair Executive Office Chair with Foot Rest Ergonomic Office Chair Home Office Desk Chairs Reclining High Back Leather Chair with Lumbar Support (Black).',
            stock: false,
            image: images.img2,
        },
        {
            title: 'Recliner Chair',
            description: 'Unwind in our luxurious recliner chair. Upholstered in soft fabric, it offers adjustable reclining positions for ultimate relaxation. Perfect for your living room or home theater.',
            stock: true,
            image: images.img3,
        },
        {
            title: 'Rocking Chair',
            description: 'Experience classic comfort with our wooden rocking chair. Its gentle rocking motion is perfect for reading or enjoying a quiet moment, making it a lovely addition to any porch or nursery.',
            stock: true,
            image: images.img4,
        },
        {
            title: 'Dining Chair',
            description: 'Elevate your dining experience with our stylish dining chair. Crafted from sturdy wood with a cushioned seat, it combines elegance and comfort for any mealtime setting.',
            stock: true,
            image: images.img5,
        },
        {
            title: 'Bar Stool',
            description: 'Add a modern touch to your kitchen or bar area with our sleek bar stool. Featuring a sturdy frame and comfortable seat, it’s perfect for entertaining guests or enjoying a quick meal.',
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
