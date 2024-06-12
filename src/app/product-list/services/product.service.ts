import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url = "http://127.0.0.1:8000";
  draggingProductId: number = 0;
  constructor(private http: HttpClient) {}
  private categoryImages = {
    Fruits: "https://static.toiimg.com/photo/110437665.cms",
    Vegetables:
      "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6", // Path to vegetable image
    Meats:
      "https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg", // Path to meat image
    All: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgX0Q62b1M1oXPaWxxbRRAo9tySVlWRtS5DQ&s",
  };
  updatedProductList: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  fetchAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + "/products", {
      headers: { Accept: "application/json" },
    });
  }
  fetchProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.url + "/products?category=" + category,
      {
        headers: { Accept: "application/json" },
      }
    );
  }
  getProductsByCategory(category: string): Observable<Product[]> | null {
    if (category === "All") {
      return this.fetchAllProducts();
    }
    return this.fetchProductsByCategory(category);
  }

  getCategoryImage(
    category: "Fruits" | "Vegetables" | "Meats" | "All"
  ): string {
    return this.categoryImages[category] || "assets/images/default.jpg";
  }
}
