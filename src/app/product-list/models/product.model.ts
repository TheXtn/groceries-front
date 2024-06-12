export interface Product {
  id: number;
  name: string;
  category: "Fruits" | "Vegetables" | "Meats" | "All";
  weight: number;
  quantity:number;
  price:number
}
