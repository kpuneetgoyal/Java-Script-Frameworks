import {combineReducers} from 'redux';
import users from './user';
import posts from './post';

var rootReducer=combineReducers({
    users:users,
    posts:posts
});

export default rootReducer;