const initialState = {
    user:[]
}
const userData = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_USER_DATA" : {
            return {
                ...state,
                user:[...state.user,action.data]
            }
        }
    default :
        return state
    }
}
export default userData