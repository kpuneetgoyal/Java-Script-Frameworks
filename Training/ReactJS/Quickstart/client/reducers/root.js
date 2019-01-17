import {combineReducers} from "redux";
import users from './users';
import posts from './posts';


var rootReducers = combineReducers({
    users :users,
    posts:posts
})

export default rootReducers;