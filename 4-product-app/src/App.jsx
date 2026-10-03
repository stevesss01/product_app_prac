import { useState } from "react";
import Product from "./components/Product";

const App = () => {
  // State: list of products
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 2000, category: "Accessories" },
  ]);

  // State: form inputs
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // Add a product
  const addProduct = (e) => {
    e.preventDefault();
    if (!name.trim() || !price || !category.trim()) return;

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      category: category.trim(),
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setCategory("");
  };

  // Remove a product
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app__title">Product List</h1>

      <form className="form" onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Conditional rendering */}
      {products.length === 0 ? (
        <p className="app__empty">No products available. Add one above!</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              onRemove={() => removeProduct(product.id)}
            />
          ))}
        </div>
      )}

      <p className="app__count">Total products: {products.length}</p>
    </div>
  );
};

export default App;
