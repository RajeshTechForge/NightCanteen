import React from "react";
import { Product } from "../types/types";
import { saveProductToD1 } from "../db/db";
import { useNavigate } from "react-router-dom";

const AdminPortal: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState<Product[]>([]);
  const [newProduct, setNewProduct] = React.useState<Partial<Product>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  //
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.quantity &&
      newProduct.image
    ) {
      const newProductData: Product = {
        id: Date.now(),
        name: newProduct.name,
        price: newProduct.price,
        quantity: newProduct.quantity,
        image: newProduct.image,
      };
      // Save the new product to Cloudflare D1
      await saveProductToD1(newProductData);
      // Update the products state
      setProducts((prevProducts) => [...prevProducts, newProductData]);
      setNewProduct({});
    }
  };

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleClick = () => {
    navigate("/");
  };

  // ========================================== //
  return (
    <div className="admin-portal">
      <div className="admin-header">
        <h1>Admin Portal</h1>
        <button onClick={handleClick} className="logout-btn">
          Back Home
        </button>
      </div>
      <form className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className="add-product-btn" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
      <div className="product-list">
        <h2>Current Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <span>
                {product.name} - ₹{product.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleDelete(product.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPortal;
