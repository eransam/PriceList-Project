import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { PriceList } from "../models/pricelist.model";
import store from "../redux/store";
import { addPriceListAction, fetchPriceListAction } from "../redux/price-list-state";

@Injectable({
  providedIn: "root",
})
export class priceListService {
  constructor(private http: HttpClient) {}


  public async addPriceList(priceList: PriceList): Promise<PriceList> {
    console.log("furniture in service front: ", priceList);

    const formData = new FormData();
    formData.append("priceListName", priceList.priceListName);
    formData.append("priceListID", priceList.priceListID.toString());
    formData.append("extErpPriceListID", priceList.extErpPriceListID.toString());
    const addedPriceList = await firstValueFrom(
      this.http.post<PriceList>(environment.pricelistUrl, formData)
    );
    store.dispatch(addPriceListAction(addedPriceList));
    return addedPriceList;
  }

  public async deletePriceList(_id: string): Promise<void> {
    await firstValueFrom(this.http.delete(environment.pricelistUrl + _id));
  }


  
  public async getAllPriceList(): Promise<PriceList[]> {
    if(store.getState().PriceListState.pricelist.length === 0 ) {

    const pricelist = await firstValueFrom(
      this.http.get<PriceList[]>(environment.pricelistUrl)
    );
    store.dispatch(fetchPriceListAction(pricelist));


}
    return store.getState().PriceListState.pricelist;
  

}


}
