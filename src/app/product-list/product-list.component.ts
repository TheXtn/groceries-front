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
  searchTerm: string = "";
  fetchProducts() {
    this.productService
      .getProductsByCategory(this.category)
      ?.subscribe((products) => {
        this.products = products;
      });
    this.categoryImage = this.productService.getCategoryImage(this.category);
  }
  updateProductList() {
    // Update the product list
    this.fetchProducts();
  }
  constructor(private productService: ProductService) {
    // Subscribe to the updatedProductList EventEmitter
    this.productService.updatedProductList.subscribe(() => {
      this.updateProductList();
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
  get filteredProducts() {
    console.log(this.searchTerm)
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  dragStart(product: Product) {
    this.productService.draggingProductId = product.id;
  }

  dragEnd(product: Product) {
  
      // this.products = this.products.filter((pr) => pr.id !== product.id);
    
    
  }
}
