import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";


let reducers = combineReducers({
    dialogPage: dialogReduser,
    profilePage: profileReduser
})



let store = createStore(reducers);

export  default  store