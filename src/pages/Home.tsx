import React from "react";
import Header from ".././components/Header";
import Slider from ".././components/Slider";
import ProductSection from ".././components/ProductSection";
import Footer from ".././components/Footer";
import { Product } from ".././types/types";

const HomePage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Men Navy Blue Solid Sweatshirt",
      price: 2599,
      quantity: 10,
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19449944/2022/10/19/c2adae5f-9be9-4430-999c-83c3216c29171666166203083-INVICTUS-Men-Sweatshirts-6701666166202598-1.jpg",
      category: "clothing",
    },
    // Add more products...
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <Slider />
        <ProductSection
          title="Clothing For Men And Women"
          products={products}
        />
        <ProductSection
          title="Accessories"
          products={products.filter((p) => p.category === "accessories")}
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
