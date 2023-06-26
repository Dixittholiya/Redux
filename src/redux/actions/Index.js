let todoId = 0

export const addTodoList = (data) => {
    todoId++
    return {
        type : "ADD_TODO_LIST",
        data:{
            ...data,
            id: todoId
        }
    }
}
export const deleteList = (id) => {
    return {
        type:"DELETE_LIST",
        id:id
    }
}
export const editTodoList = (id) => {
    return{
        type:"EDIT_TODO_LIST",
        id:id
    }
}
export const updateTOdoList = (data) => {
    return {
        type:"UPDATE_TODO_DATA" ,
        data:data
    }
}

