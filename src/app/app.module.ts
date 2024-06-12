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
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FruitsComponent,
    VegetablesComponent,
    MeatsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
