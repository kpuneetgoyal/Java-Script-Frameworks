export default function users(defStore=[],action){
    console.log("with in users... reducers");

    /*****************************************************************************************
     * whenever any action is dispatched (custom or defeault) , every reducer will get notified
     * But we dont want to notify them all, these should be action based.
     *****************************************************************************************/

    switch(action.type){
        case "INCREMENT_FOLLOWERS": return defStore;
        case "ADD_USER" : return defStore; //Add user here and pass updated def store
        default: return defStore;
    }
}