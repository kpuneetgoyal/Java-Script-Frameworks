export default function users(defStore=[],action){

    switch(action.type){
       case 'INCREMENT_FOLLOWERS':
       console.log("inside INCREMENT_FOLLOWERS..."+action.index);
       

         var newData= [
           ...defStore.slice(0,action.index),
           {...defStore[action.index],followers:defStore[action.index].followers+1},
           ...defStore.slice(action.index+1)
            ];
           console.log(newData);
           return newData;
       case 'ADD_USER' :
            return defStore;
       default :
       console.log('default users')
            return defStore;

    }

    console.log("Within users... reducers.."+action.type);
    return defStore;
}