export default function posts(defStore=[],action){
    switch(action.type){
        case 'RATE_POST':
            console.log("within post reducer");
            return defStore;
        default:
            return defStore;
    }
}