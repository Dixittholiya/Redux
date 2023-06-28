const initialState = []
const productReducers = (state = initialState, action) => {

    switch (action.type) {
        case "GET_DATA_TO_PRODUCT": {
            return [
                ...action.data
            ]
        }

        default:
            return state
    }
}
export default productReducers