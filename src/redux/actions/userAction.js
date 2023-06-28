let userId = 0

export const addUser = (data) => {
    userId++
    return {
        type: "ADD_USER_DATA",
        data: {
            ...data,
            id: userId
        }
    }
}

export const saveUserData = (data) => {
    return {
        type: "SAVE_LOGIN_USER_DATA",
        data: data
    }
}

export const removeUserData = (data) => {
    return {
        type: "REMOVE_LOGIN_USER_DATA",
        data: data
    }
}