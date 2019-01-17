import { type } from "os";

export default function users(defStore=[],action){
    switch(action.type){
        case 'INCREMENT_FOLLOWERS':
            console.log("within users reduces.."+action.index);

            var newData=[...defStore.slice(0,action.index),
                {...defStore[action.index],followers:defStore[action.index].followers+1},
                ...defStore.slice(action.index+1)
            ];

            return newData;
        case 'ADD_USER':
            return defStore;
        default:
            return defStore;
    }
 }