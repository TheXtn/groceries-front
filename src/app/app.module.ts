import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllComponent } from "./all/all.component";
import { FruitsComponent } from "./fruits/fruits.component";
import { VegetablesComponent } from "./vegetables/vegetables.component";
import { MeatsComponent } from "./meats/meats.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { DragDropModule } from "primeng/dragdrop";

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FruitsComponent,
    VegetablesComponent,
    MeatsComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
