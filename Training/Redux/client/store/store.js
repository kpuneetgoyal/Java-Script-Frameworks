import { createStore } from "redux";
import rootReducer from "../reducers/root";
import users from "../data/data";

var defaultStoreData={
    users:users,
    posts:[{id:1,title:'First Post...'}]
}

//Pass first parameter as a reducer
//second parameter is your actual data
//Key will help us to map the reducers
let store = createStore(rootReducer,defaultStoreData);
export default store;