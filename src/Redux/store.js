import { combineReducers, applyMiddleware, createStore  } from "redux";
import storeReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    todoList: storeReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

