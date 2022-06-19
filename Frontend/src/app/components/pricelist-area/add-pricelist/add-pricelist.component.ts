import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PriceList } from "src/app/models/pricelist.model";
import { priceListService } from "src/app/services/priceList.service";
import { NotifyService } from "src/app/services/notify.service";


@Component({
  selector: "app-add-pricelist",
  templateUrl: "./add-pricelist.component.html",
  styleUrls: ["./add-pricelist.component.css"],
})
export class AddpricelistComponent implements OnInit {

  public pricelist = new PriceList();



  constructor(
    private priceListService: priceListService,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  async ngOnInit() {
    try {
    } catch (err: any) {
      alert(err.message);
    }
  }

  async send() {
    try {

        console.log("this.pricelist in the front in the add: " , this.pricelist);
        
        const addedPricelist = await this.priceListService.addPriceList(this.pricelist);
        this.notifyService.success("furniture has been added, id: " + addedPricelist.priceListName);
        this.router.navigateByUrl("/pricelist");
    } catch (err: any) {
      alert(err.message);
    }
  }
}
