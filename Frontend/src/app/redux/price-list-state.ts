import { PriceList } from '../models/pricelist.model';

// Products State - products data needed in the application level:
export class PriceListState {
    public pricelist: PriceList[] = [];
}

// Products Action Type - any action which can be done on the above products state:
export enum PriceListActionType {
    FetchPriceList = "FetchPriceList",
    AddPriceList = "AddPriceList",
    UpdatePriceList = "UpdatePriceList",
    DeletePriceList = "DeletePriceList"
}

export interface PriceListAction {
    type: PriceListActionType;
    payload: any;
}

export function fetchPriceListAction(furniture: PriceList[]): PriceListAction {
    return { type: PriceListActionType.FetchPriceList, payload: furniture };
}

export function addPriceListAction(pricelist: PriceList): PriceListAction {
    return { type: PriceListActionType.AddPriceList, payload: pricelist };
}

export function updatePriceListAction(pricelist: PriceList): PriceListAction {
    return { type: PriceListActionType.UpdatePriceList, payload: pricelist };
}
export function deletePriceListAction(id: number): PriceListAction {
    return { type: PriceListActionType.DeletePriceList, payload: id };
}


export function PriceListReducer(currentState = new PriceListState(), action: PriceListAction): PriceListState {

    const newState = { ...currentState };

    switch (action.type) {

        case PriceListActionType.FetchPriceList:
            newState.pricelist = action.payload; // Here the payload is the products list.
            break;

        case PriceListActionType.AddPriceList:
            newState.pricelist.push(action.payload); // Here the payload is a single object to add.
            break;

        case PriceListActionType.UpdatePriceList:
            const indexToUpdate = newState.pricelist.findIndex(p => p._id === action.payload._id); // Here the payload is a single object to update.
            if (indexToUpdate >= 0) {
                newState.pricelist[indexToUpdate] = action.payload;
            }
            break;

        case PriceListActionType.DeletePriceList:
            const indexToDelete = newState.pricelist.findIndex(p => p._id === action.payload); // Here the payload is the id to delete.
            if (indexToDelete >= 0) {
                newState.pricelist.splice(indexToDelete, 1);
            }
            break;
    }

    return newState;
}
