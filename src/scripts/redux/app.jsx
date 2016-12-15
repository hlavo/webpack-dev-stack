import React from "react"
import ReactDOM from "react-dom"
import {connect} from "react-redux"
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router'
import Homepage from "../views/containers/homepage/homepage.js"
import Notfound from "../views/containers/notFound/notfound.jsx"

const Routes = (

    <Route path='/'>
        <IndexRoute component={Homepage}> </IndexRoute>
        <Route path="*" component={Notfound}/>
    </Route>
);

export default class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                {Routes}
            </Router>
        )
    }
}