import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PriceList } from "src/app/models/pricelist.model";
import { environment } from "src/environments/environment";


@Component({
  selector: "app-pricelistcard",
  templateUrl: "./pricelist-card.component.html",
  styleUrls: ["./pricelist-card.component.css"],
})
export class pricelistCardComponent {

  @Input()
  public PriceList: PriceList;

  async ngOnInit() {
    try {
      console.log("furniture in card: ", );
    } catch (err: any) {
      alert(err.message);
    }
  }

  @Output()
  public deleteMe = new EventEmitter<string>();

  public deletePriceList(_id: string) {
    this.deleteMe.emit(_id);
  }
}
