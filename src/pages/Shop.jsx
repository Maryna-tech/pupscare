import React, { useState} from "react"
import { products } from "./ShopProduct"; 

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    
  // Function to add items to the cart
const addToCart = (item) => {
    setCart([...cart, item]);
};

  // Function to filter products by category
const filterProducts = (category) => {
    if (category === "all") {
        setFilteredProducts([
        ...products.food,
        ...products.accessories,
        ...products.toys,
        ...products.clothes
    ]);
    } else {
        setFilteredProducts(products[category]);
    }
};

  // Function to remove an item from the cart by id
const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
};

return (
    <div className = "store-container">
        <h2 className = "animate__animated animate__fadeInLeftBig">🦴 Dog Shop</h2>

{/* Filter Buttons */}
    <div className = "buttons">
        <button className = "change" onClick = { () => filterProducts("food")}>Food-Treats</button>
        <button className = "change" onClick = { () => filterProducts("accessories")}>Accessories</button>
        <button className = "change" onClick = { () => filterProducts("toys")}>Toys</button>
        <button className = "change" onClick = { () => filterProducts("clothes")}>Clothes</button>
        <button className = "change" onClick = { () => filterProducts("all")}>All Products</button>
    </div>

{/* Display Products */}
    <div className = "grid">
        {filteredProducts.map((item) => (
        <div key = {item.id} className = "card">
            <img src = {item.image} alt = {item.name} className = "product-image" />
            <h3>{item.name}</h3>
            <p>£{item.price}</p>
            <button className = "change" onClick = { () => addToCart(item)}>Add</button>
        </div>
        ))}
    </div>

      {/* Cart */}
    <div className = "cart"><h2>🛒 Trolley</h2>
    {cart.length === 0 ? (<p>Your trolley is empty.</p>) :
        (<ul>{cart.map((item, index) => (
            <li className = "product" key = {index}>{item.name} - £{item.price}
                <button className = "remove-btn" onClick = { () => removeFromCart(item.id)}>Remove</button>
            </li>
            ))}
        </ul>
        )}
    </div>
    </div>
    );
};

export default Shop
