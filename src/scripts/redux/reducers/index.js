import { combineReducers } from 'redux'
import errorReducer from './ErrorReducer.js'
import FirebaseReducer from './FirebeseReducer.js'

const rootReducer = combineReducers({
    error: errorReducer,
    firebase:FirebaseReducer
})

export default rootReducer