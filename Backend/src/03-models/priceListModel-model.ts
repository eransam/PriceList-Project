import { Document, Schema, model } from "mongoose";

export interface IPriceListModel extends Document {
     priceListID: number;
     priceListName: string;
     extErpPriceListID: number | null;
};

const PriceListSchema = new Schema({
    priceListID: {
        type: Number,
        required: [true,"priceListID is required"],
        trim: true
    },
    priceListName: {
        type: String,
        required: [true,"priceListName is required"],
        minlength: [2, "lastName must be min 2 chars"],
        maxlength: [50, "lastName must be max 50 chars"],
        trim: true
    },
    extErpPriceListID: {
        type: Number ,

    },
}, {
    versionKey: false,
    id: false,
    toJSON: {virtuals: true}
});


export const PriceListModel = model<IPriceListModel>("PriceListModel", PriceListSchema, "priceList");
