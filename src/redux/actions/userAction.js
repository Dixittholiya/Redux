let userId = 0

export const addUser = (data) => {
    userId++
    return {
        type:"ADD_USER_DATA",
        data:{
            ...data,
            id:userId
        }
    }
}