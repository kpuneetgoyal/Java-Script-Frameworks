export function IncrementFollowers(index){
    return {
        type : 'INCREMENT_FOLLOWERS',
        index : index
    }
}

export function DeleteUser(){
    return {
        type : "REMOVE_USER"
    }
}

export function RatPost(){
    return {
        type: 'RATE_POST'
    }
}