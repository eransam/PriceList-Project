import { HomeComponent } from "./components/home-area/home/home.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutComponent } from "./components/layout-area/layout/layout.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./components/layout-area/header/header.component";
import { MenuComponent } from "./components/menu-area/menu/menu.component";
import { FooterComponent } from "./components/layout-area/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatNativeDateModule } from "@angular/material/core";
import { MaterialExampleModule } from "src/material.module";
import { JwtInterceptor } from "./services/jwt.interceptor";
import { AddpricelistComponent } from "./components/pricelist-area/add-pricelist/add-pricelist.component";
import { pricelistCardComponent } from "./components/pricelist-area/pricelist-card/pricelist-card.component";
import { pricelistComponent } from "./components/pricelist-area/pricelist-list/pricelist-list.component";
import { SearchBarComponent } from "./components/pricelist-area/search-bar/search-bar.component";
import { HomePageComponent } from "./components/pricelist-area/home-page/home-page.component";
import { DataService } from "./services/data.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { pricelistCardCopyComponent } from "./components/pricelist-area/pricelist-card-copy/pricelist-card-copy.component";





@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AddpricelistComponent,
    pricelistCardComponent,
    pricelistComponent,
    SearchBarComponent,
    HomePageComponent,
    pricelistCardCopyComponent
    
    
    

  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    //http ajax שירות קריאות
    HttpClientModule,
    MatNativeDateModule,

    //מאפשר לעבוד עם פורם בפרוייקט
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialExampleModule,


     MatIconModule, MatInputModule,
    MatAutocompleteModule,
   MatChipsModule,
    MatFormFieldModule
    
  ],
  providers: [
    DataService,
    {
    useClass: JwtInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
}],

  bootstrap: [LayoutComponent],
})
export class AppModule {}
