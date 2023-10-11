import { combineReducers } from "redux";
import { productReducer } from './reducers';
import {userReducer} from './reducersU';
export const rootReducer = combineReducers({ productReducer,userReducer})