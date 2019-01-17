export default  function posts(defStore=[],action){

   switch (action.type) {
       case 'RATE_POST':
                console.log('Within Posts Reducer..' + action.type);
                console.log(defStore);
                return defStore;               
       default:
           return defStore;
   }

}