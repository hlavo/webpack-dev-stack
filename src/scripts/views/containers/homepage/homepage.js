import React from "react";

import Actions from "../../../redux/actions/index.js"

import {connect} from 'react-redux'

import styles from './homepage.scss'

class Homepage extends React.Component{

    render(){
        return(
            <div className={ styles.Homepage }>
                HOMEPAGE
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
    Homepage : state.Homepage
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)(Homepage)

