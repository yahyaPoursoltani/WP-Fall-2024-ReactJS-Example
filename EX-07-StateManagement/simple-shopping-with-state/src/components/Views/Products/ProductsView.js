import React, { useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductsView.css';
import initialProducts from './ProductList.json';

function ProductsView() {
    // Initialize state with the list of products
    const [products, setProducts] = useState(initialProducts);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target; // Access the form directly

        const newProduct = {
            id: products.length ? Math.max(products.map((p) => p.id)) + 1 : 1, // Assign a new ID
            title: form.title.value, // Get product title from the input
            price: parseFloat(form.price.value), // Convert to float
            category: 'None', // Set default category
            image: "https://via.placeholder.com/200", // Placeholder image
        };

        // Add the new product to the list
        setProducts([...products, newProduct]);

        // Reset the form
        form.reset(); 
    };

    return (
        <div className="app">
            <h1>Product Listings</h1>

            {/* Form for adding new products */}
            <form onSubmit={handleSubmit} className="product-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Product Title"
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    required
                />
                <button type="submit">Add Product</button>
            </form>

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

export default ProductsView;