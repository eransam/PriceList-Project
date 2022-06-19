import priceListModelLogic from "../05-logic/priceListModel-logic";
import { PriceListModel } from "../03-models/priceListModel-model";
import { IPriceListModel } from "../03-models/priceListModel-model";


const onj1:any = {
    "priceListID": 1,
    "priceListName": "test3",
    "extErpPriceListID": 25
}



const check2 = priceListModelLogic.getAllPriceList();
if(check2){
   console.log("getAllPriceList work");
    
}
console.log("getAllPriceList not work");





const check = priceListModelLogic.addPriceList(onj1);
if(check){
   console.log("addPriceList work");
    
}
console.log("addPriceList not work");



const check3 = priceListModelLogic.deletePriceList("62acab13552e8c9e49ab9dd9");
if(check3){
   console.log("addPriceList work");
    
}
console.log("addPriceList not work");