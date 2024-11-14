// src/App.js
import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductsView.css'
import products from './ProductList.json'

function App() {

    return (
        <div className="app">
            <h1>Product Listings</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;