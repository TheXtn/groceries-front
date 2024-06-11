import { Component } from "@angular/core";
import { ProductService } from "./product-list/services/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(private productService: ProductService) {}
  productCount = this.productService.getProducts().length;
  title = "gro";
  drop(cat: string) {
    console.log(cat);
  }
}
