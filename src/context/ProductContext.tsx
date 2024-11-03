import React, { createContext } from "react";
import { Product } from "../types/types";

const ProductContext = createContext<{
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  newProduct: Partial<Product>;
  setNewProduct: React.Dispatch<React.SetStateAction<Partial<Product>>>;
} | null>(null);

interface ProductProviderProps {
  children: React.ReactNode;
}

const ThemeStyleProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [newProduct, setNewProduct] = React.useState<Partial<Product>>({});

  return (
    <ProductContext.Provider
      value={{ products, setProducts, newProduct, setNewProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ThemeStyleProvider };
