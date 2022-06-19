import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home-area/home/home.component";
import { AddpricelistComponent } from "./components/pricelist-area/add-pricelist/add-pricelist.component";
import { HomePageComponent } from "./components/pricelist-area/home-page/home-page.component";
import { pricelistCardComponent } from "./components/pricelist-area/pricelist-card/pricelist-card.component";
import { pricelistComponent } from "./components/pricelist-area/pricelist-list/pricelist-list.component";

const routes: Routes = [
  { path: "pricelist/new", component: AddpricelistComponent },
  { path: "pricelist", component: pricelistComponent },
  { path: "home", component: HomeComponent },
  { path: "searchtest", component: HomePageComponent },

  { path: "", redirectTo: "/searchtest", pathMatch: "full" },
  { path: "**", redirectTo: "/searchtest", pathMatch: "full" },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
