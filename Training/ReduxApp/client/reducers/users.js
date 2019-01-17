export default  function users(defStore=[],action){

    switch(action.type){
        case 'INCREMENT_FOLLOWERS':
            // update the store !
            console.log('Within Users Reducer..'+ action.index);

                var newData = [
                    ...defStore.slice(0,action.index),
                    {...defStore[action.index],
                        followers:defStore[action.index].followers + 1},
                    ...defStore.slice(action.index+1)
                ];     
                console.log(newData);    
            return   newData;
    
        case 'ADD_USER':
            return defStore; // return updated store 
        case 'FETCH_USERS':
                console.log("Fetch User Reducers ... ");
                return action.response;
        default:
            return defStore;
    }   
}