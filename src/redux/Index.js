import {createStore} from 'redux'
import rootReducers from './reducers/Index'

// redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducers)
  
  const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  export let persistor = persistStore(store)

// const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store


