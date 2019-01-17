export default function users(defStore=[],action){
    
    /*****************************************************************************************
     * whenever any action is dispatched (custom or defeault) , every reducer will get notified
     * But we dont want to notify them all, these should be action based.
     *****************************************************************************************/

    switch(action.type){
        case "INCREMENT_FOLLOWERS":
        console.log("with in users... reducers");

        let newData=[...defStore.slice(0,action.index),//This data is before theindex on which we are palying. Hence we need to past it without any change
            {...defStore[action.index],//Expand all the properties of the object along with followers. Here we are getting the object on the tupple which we are playing with. This is also printing the tupple we are working with
                    followers:defStore[action.index].followers+1,//These are the attributes on which we are working. This change is overriding the value initialized from the previous state at lin no 13
                    login:defStore[action.index].login},//This is working data on which we want to increment the things. This is actual working.This change is overriding the value initialized from the previous state at lin no 13
            ...defStore.slice(action.index+1)];//This data is after the index on which we are palying. Hence we need to past it without any change
        
            return newData;

        case "ADD_USER" : return defStore; //Add user here and pass updated def store
        default: return defStore;
    }
}