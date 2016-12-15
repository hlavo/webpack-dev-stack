import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import Actions from "./actions/index"
import { composeWithDevTools } from 'redux-devtools-extension'
import loaderMiddleware from './middlewares/LoadMiddleware.js'



let finalCreateStore = composeWithDevTools(
    applyMiddleware(thunk,loaderMiddleware)
)(createStore)


export default function configureStore(initialState = {}) {
    return finalCreateStore(rootReducer, initialState)
}