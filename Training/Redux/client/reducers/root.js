import { combineReducers } from "redux";
import users from "./users";
import posts from "./posts";

//This is to combine possible set of reducers

let rootReducer = combineReducers({
    users:users,
    posts:posts
});

export default rootReducer;