import React from "react";
import { Product } from "../types/types";

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="brand">{product.brand}</p>
              <p className="price">Rs {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
