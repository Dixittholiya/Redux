import addtodoData from './TodoForm'
import userdata from './User'
import productReducers from './ProductReducers'

import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    addtodoData,
    userdata,
    productReducers
})

export default rootReducers