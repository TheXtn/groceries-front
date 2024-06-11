export interface Product {
  id: number;
  name: string;
  category: "Fruits" | "Vegetables" | "Meats" | "All";
  description: string;
}
