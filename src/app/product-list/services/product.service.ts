import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private categoryImages = {
    Fruits: "https://static.toiimg.com/photo/110437665.cms",
    Vegetables:
      "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6", // Path to vegetable image
    Meats:
      "https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg", // Path to meat image
    All: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgX0Q62b1M1oXPaWxxbRRAo9tySVlWRtS5DQ&s",
  };

  private products: Product[] = [
    {
      id: 1,
      name: "Apple",
      category: "Fruits",
      description: "A sweet red fruit",
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      description: "A long yellow fruit",
    },
    {
      id: 3,
      name: "Carrot",
      category: "Vegetables",
      description: "A crunchy orange vegetable",
    },
    {
      id: 4,
      name: "Broccoli",
      category: "Vegetables",
      description: "A green vegetable",
    },
    {
      id: 5,
      name: "Chicken",
      category: "Meats",
      description: "A popular white meat",
    },
    {
      id: 6,
      name: "Beef",
      category: "Meats",
      description: "A common red meat",
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    if (category === "All") {
      return this.products;
    }
    return this.products.filter((product) => product.category === category);
  }

  getCategoryImage(
    category: "Fruits" | "Vegetables" | "Meats" | "All"
  ): string {
    return this.categoryImages[category] || "assets/images/default.jpg";
  }
  changeProductCategory(
    productId: number,
    newCategory: "Fruits" | "Vegetables" | "Meats" | "All"
  ): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.category = newCategory;
    }
  }
}
