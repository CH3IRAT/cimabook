import {combineReducers} from "redux"

import {userReducer} from "./userReducer"
import { movieReducer } from "./movieReducer"
import {editReducer} from "./editReducer"
export const rootReducer=combineReducers({userReducer , movieReducer,editReducer})