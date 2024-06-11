import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllComponent } from "./all/all.component";
import { FruitsComponent } from "./fruits/fruits.component";
import { VegetablesComponent } from "./vegetables/vegetables.component";
import { MeatsComponent } from "./meats/meats.component";

const routes: Routes = [
  { path: "", redirectTo: "/all", pathMatch: "full" },
  { path: "all", component: AllComponent },
  { path: "fruits", component: FruitsComponent },
  { path: "vegetables", component: VegetablesComponent },
  { path: "meats", component: MeatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
