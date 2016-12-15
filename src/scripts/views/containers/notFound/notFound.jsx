import React from "react";

import Actions from "../../../redux/actions/index.js"

import {connect} from 'react-redux'

import styles from './notFound.scss'

class NotFound extends React.Component{

    render(){
        return(
            <div className={ styles.NotFound }>
                404
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    NotFound : state.NotFound
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(NotFound)

