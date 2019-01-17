import { createStore } from "redux";
import rootReducer from '../reducers/root';
import users from '../data/data';

var defaultStoreData = {
    users:users,
    posts:[{id:1,title:'First Post..'}]
}

var store = createStore(rootReducer,defaultStoreData);
export default store;