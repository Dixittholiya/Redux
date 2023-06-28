const initialState = {
    user: [],
    loginUserData: {}
}
const userData = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER_DATA": {
            return ({
                ...state,
                loginUserData: {},
                user: [...state.user, action.data]
            })
        }
        case "SAVE_LOGIN_USER_DATA": {
            return {
                ...state,
                loginUserData: action.data
            }
        }
        case "REMOVE_LOGIN_USER_DATA": {
            return {
                ...state,
                loginUserData: {}
            }
        }
        default:
            return state
    }
}
export default userData