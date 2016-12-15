import React from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import configureStore from './redux/store.js'
import App from './redux/app.jsx'

const app = document.getElementById('app')

let initialState = {

};

let store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
app)