// src/App.js
import React from 'react';
import './ProductsView.css';
import products from './ProductList.json';

function App() {
    return (
        <div className="app">
            <h1>Product Listings</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id}> {/* Assuming each product has a unique id */}
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-category">{product.category}</p>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;