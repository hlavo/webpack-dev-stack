import React from "react";

import Actions from "../../redux/actions/index"

import {connect} from 'react-redux'

import styles from './{{name}}.scss'

class {{ name }} extends React.Component{

    render(){
        return(
            <div className={ styles.{{name}} }>
            </div>
        )
    }
}

const MapStateToProps = (state) => ({
{{ name }} : state.{{ name }}
})

const MapDispatchToProps = (dispatch) => ({

})

export default connect(MapStateToProps, MapDispatchToProps)({{ name }})

