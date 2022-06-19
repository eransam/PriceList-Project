import { priceListService } from "../../../services/priceList.service";
import { Component, OnInit } from "@angular/core";
import { PriceList } from "src/app/models/pricelist.model";


@Component({
  selector: "app-pricelist-list",
  templateUrl: "./pricelist-list.component.html",
  styleUrls: ["./pricelist-list.component.css"],
})
export class pricelistComponent implements OnInit {
  public pricelist: PriceList[];

  constructor(private priceListService: priceListService) {}

  async ngOnInit() {
    try {
      this.pricelist = await this.priceListService.getAllPriceList();
      console.log("pricelist: ", this.pricelist);
    } catch (err: any) {
      alert(err.message);
    }
  }

  async deleteThisCard(_id: string) {
    try {
      await this.priceListService.deletePriceList(_id);
      alert("pricelist has been deleted");
      const index = this.pricelist.findIndex((g) => g._id === _id);
      this.pricelist.splice(index, 1);
    } catch (err: any) {
      alert(err.message);
    }
  }
}
