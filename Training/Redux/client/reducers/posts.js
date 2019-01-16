export default function posts(defStore=[],action){

    switch(action.type){
        case 'RATE_POST' : 
            console.log("with in posts... reducers..."+action.type)
            return defStore;
        default : 
            return defStore;
    }

    return defStore
}