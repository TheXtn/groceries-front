import { Component, Input, OnInit } from "@angular/core";
import { ProductService } from "./services/product.service";
import { Product } from "./models/product.model";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  @Input() category: "Fruits" | "Vegetables" | "Meats" | "All" = "All";
  products: Product[] = [];
  categoryImage: string = "";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProductsByCategory(this.category);
    this.categoryImage = this.productService.getCategoryImage(this.category);
  }
  dragStart(product: Product) {
    // This on starting the product dragging
  }
  dragEnd(product: Product) {
    // This on ending the product dragging
  }
}
