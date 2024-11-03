export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: "food" | "drinks" | "accessories" | "other";
}
