export const initialState = {
    list:[],
    edittId:null,
};

const addtodoData = (state = initialState,action) => {
    switch (action.type) {
        case "ADD_TODO_LIST":{
            // console.log("add to list");
            return ({
                ...state,
                    editId:null,
                    list:[...state.list,action.data]    
            })
        }
        case "DELETE_LIST" : {
            return ({
                ...state,
                editId: null,
                list: state.list.filter(items => items.id !== action.id
            )});
        }
        case "EDIT_TODO_LIST":{
            return {
                ...state,
                edittId:action.id
            }
        }
        case "UPDATE_TODO_DATA": {
            let array = [...state.list]
            let id = action.data.id
            // let find = state.list.filter(x => x.id === id)
            // let index = array.indexOf(id)
            let index = array.findIndex(a=> a.id === id);
            console.log("action reducer",index);
            array[index] = {
                ...action.data
            }
            // array = [find] = action.data
            return {
                ...state,
                edittId:null,
                list:[...array]
            }
        }
        
        //  case "ADD_USER" : {
        //         return {
        //             ...state,
        //             user:[...state.user,action.data]
        //         }
        //     }           
        
            
    
        default:
            return state
    }
}
export default addtodoData