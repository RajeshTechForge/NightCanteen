import { Product } from "../types/types";

//
const getD1Database = async () => {
  const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
  const API_TOKEN = import.meta.env.VITE_CLOUDFLARE_API_TOKEN;

  console.log("Retrieving D1 database...");

  const d1 = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${DATABASE_ID}/d1/databases/products/execute`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  return d1;
};

//
export const saveProductToD1 = async (product: Product) => {
  try {
    const d1 = await getD1Database();
    await d1
      .prepare(
        "INSERT INTO products (id, name, price, quantity, image) VALUES (?, ?, ?, ?, ?)"
      )
      .bind(
        product.id,
        product.name,
        product.price,
        product.quantity,
        product.image,
        // product.category
      )
      .execute();
    console.log("Product saved to D1 database");
  } catch (error) {
    console.error("Error saving product to D1 database:", error);
  }
};
