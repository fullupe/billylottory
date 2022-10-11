export const betReducer=(state,action)=>{
    switch(action.type){
        case "ADD_BETTNUMBERS":
        return {...state, betnumbers:action.payload}
        default:
            break;

}

};