import axios from 'axios';

export function IncrementFollowers(index){
    return {
        type:'INCREMENT_FOLLOWERS',
        index:index
    }
}

export function FetchUserData(){
    
    let promise = axios.get('https://api.myjson.com/bins/t15w0');
    //Redux does not allow Lazy lodding or Lazy Dispatching
    //Hence we need Middleware to do that. "Redux Thunk" is a middleware who can help us here.

    return mydispatch =>{
        promise.then(
            (response) => {mydispatch({type:'FETCH_USERS',response:response.data})},
            (err) => {console.log(err)}
        );
    };
}

export function DeleteUser(){
    return {
        type:'REMOVE_USER'
    }
}

export function RatePost(){
    return {
        type:'RATE_POST'
    }
}