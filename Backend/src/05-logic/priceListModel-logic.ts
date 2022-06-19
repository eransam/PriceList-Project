import ClientError from "../03-models/client-error";
import mongoose from "mongoose";

import { PriceListModel } from "../03-models/priceListModel-model";
import { IPriceListModel } from "../03-models/priceListModel-model";

import { v4 as uuid } from "uuid";
import ErrorModel from "../03-models/error-model";
import path from "path";

async function getAllPriceList(): Promise<IPriceListModel[]> {
    
  return PriceListModel.find().exec();
}


async function addPriceList(furniture: IPriceListModel): Promise<IPriceListModel> {
    console.log("addPriceList in the logic: " , furniture);
    
    const errors = furniture.validateSync();
    if(errors) throw new ClientError(400, errors.message);

const addedfurniture = await furniture.save();
  return addedfurniture;
}

async function deletePriceList(_id: string): Promise<void> {

  await PriceListModel.findByIdAndDelete(_id).exec();
}



export default {
    getAllPriceList,
    addPriceList,
    deletePriceList,
};
