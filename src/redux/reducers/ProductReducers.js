const initialState = {
    product:[]
}
const productReducers = (state=initialState,action) => {
    switch(action.type) {
        case "GET_DATA_TO_PRODUCT" : {
            return {
                ...state,
                product:[...state.product,action.data]
            }
        }
    default :
        return state
    }
}
export default productReducers