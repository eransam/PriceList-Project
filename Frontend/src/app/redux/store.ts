import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { PriceListReducer } from "./price-list-state";

const reducers = combineReducers({ 
    PriceListState: PriceListReducer 
 });

const store = createStore(reducers, composeWithDevTools());

export default store;
