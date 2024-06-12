import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product-list/services/product.service";
import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  url = "http://127.0.0.1:8000";
  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private messageService: MessageService
  ) {
    // Subscribe to the updatedProductList EventEmitter
    this.productService.updatedProductList.subscribe(() => {
      this.startProductsCount();
    });
  }

  productCount: { [key: string]: number } = {
    All: 0,
    Fruits: 0,
    Vegetables: 0,
    Meats: 0,
  };
  title = "gro";
  countProducts(cat: string) {
    this.productService.fetchProductsByCategory(cat).subscribe((data) => {
      this.productCount[cat] = data.length;
    });
  }
  startProductsCount() {
    const categories = ["All", "Fruits", "Vegetables", "Meats"];

    for (let category of categories) {
      this.countProducts(category);
    }
  }
  ngOnInit(): void {
    this.startProductsCount();
  }
  drop(cat: string) {
    ///UPDATE PRODUCT STATE HERE
    console.log("drop down");
    const body = { name: cat };
    this.http
      .put(
        this.url +
          "/products/" +
          this.productService.draggingProductId +
          "/category",
        body,
        {
          headers: { Accept: "application/json" },
        }
      )
      .subscribe(() => {
        this.productService.updatedProductList.emit();
      });
  }
}
