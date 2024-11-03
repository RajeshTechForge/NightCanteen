import React, { useEffect } from "react";
import Header from ".././components/Header";
import Slider from ".././components/Slider";
import ProductSection from ".././components/ProductSection";
import Footer from ".././components/Footer";
import { Product } from ".././types/types";

const HomePage: React.FC = () => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [products, setProducts] = React.useState<Product[]>([]);

  // feating data from api
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://${SERVER_URL}/api/products`);
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  });

  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
        <ProductSection
          title="Food Items"
          products={products.filter((p) => p.category === "food")}
        />
        <ProductSection
          title="Drinks"
          products={products.filter((p) => p.category === "drinks")}
        />
        <ProductSection
          title="Accessories"
          products={products.filter(
            (p) => p.category === "accessories" || p.category === "other"
          )}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
