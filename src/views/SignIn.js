import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import SignInBlock from '../components/SignIn'

@observer
export default class SignIn extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <SignInBlock store={ this.store } />
    }
}

/* Initialize stylesheet. */
const styles = {

}
