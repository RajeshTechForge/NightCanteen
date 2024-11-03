import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { useCart } from "../contexts/CartContext";
import "../styles/ProductDetail.css";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      const products: Product[] = JSON.parse(storedProducts);
      const foundProduct = products.find(
        (p) => p.id === parseInt(id!.toString())
      );
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-price">₹{product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
