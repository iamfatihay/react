
const initial = { gorevler: [{ id: 0, yazi: "Work on Redux" }, { id: 1, yazi: "Kopekleri gezdir" }] }

const todoReducer = (state = initial, action) => {
    switch (action.type) {
        case "TEMIZLE":

            // return {gorevler:[]}
            return initial
        case "EKLE":

            return {gorevler:[...state.gorevler,{id:state.gorevler.length+1,yazi:action.payload}]}
        default:
            return state;
    }
}

export default todoReducer;