import React from 'react';
import './ProductCard.css';

function ProductCard({ title, image, price, category }) {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3 className="product-title">{title}</h3>
            <p className="product-category">{category}</p>
            <p className="product-price">${price.toFixed(2)}</p>
        </div>
    );
}

export default ProductCard;