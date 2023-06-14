
const initial={gorevler:[{id:0, yazi:"Redux Çalışıyoruz"},{id:1,yazi:"köpekleri gezdir"}]}

const todoReducer = ( state=initial,action



) => {

    // console.log(action);
 switch (action.type) {
     case "TEMİZLE":
        
//    return {gorevler:[]}
   return initial;
 
   case"EKLE":

   return {gorevler:[...state.gorevler,{id:state.gorevler.length+1,yazi:action.payload}]};

    default:
        return state;
 }

}

export default todoReducer