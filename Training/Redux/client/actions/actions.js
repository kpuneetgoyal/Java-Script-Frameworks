export function IncrementFollowers(index){   //   <----- This is action creator
    return {                            //////////////////////////////////
        type : 'INCREMENT_FOLLOWERS',
        index: index    //    <----  Actions
    }                                   /////////////////////////////////
}

export function DeleteUser(){
    return{
        type:'REMOVE_USER'
    }
}

export function AddUser(){
    return{
        type:'ADD_USER'
    }
}

export function RatePost(){
    return{
        type:'RATE_POST'
    }
}

export function PostComment(){
    return{
        type:'POST_COMMENT'
    }
}