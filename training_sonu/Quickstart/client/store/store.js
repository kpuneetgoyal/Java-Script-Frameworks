import {createStore} from 'redux';
import rootReducers from '../reducers/root';
import users from '../data/data';

var defaultStoreData={
    users:users,
    posts:[{id:1,title:'First Post..'}]
}

var store=createStore(rootReducers,defaultStoreData);
export default store;