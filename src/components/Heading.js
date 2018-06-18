import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

@observer
export default class Heading extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        const style = {
            backgroundColor: 'rgba(30, 160, 30, 0.2)',
            border: '1pt solid',
            borderColor: 'rgba(30, 160, 30, 0.5)',

            fontSize: '1.4em',
            fontWeight: 'bold',
            letterSpacing: '0.3em',
            color: 'rgba(30, 160, 30, 0.8)',
            textShadow: '#e0e0e0 1px 1px 0',

            MozBorderRadius: '5px',
            WebkitBorderRadius: '5px',
            borderRadius: '5px'
        }

        const heading = this.props.title.toUpperCase()

        return <div class="mb-3 py-1 text-center" style={ style }>
        	<div>{ heading }</div>
        </div>
    }

    componentDidMount() {

    }
}

/* Initialize stylesheet. */
const styles = {

}
