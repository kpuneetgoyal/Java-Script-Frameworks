import { createStore,applyMiddleware } from "redux";
import rootReducer from '../reducers/root';
import users from '../data/data';
import thunk from 'redux-thunk';


/*var defaultStoreData = {
    users:users,
    posts:[{id:1,title:'First Post..'}]
}*/

var store = createStore(rootReducer,applyMiddleware(thunk));
export default store;