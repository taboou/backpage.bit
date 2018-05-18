import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import { SignIn } from '../components'

@observer
export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <SignIn store={ this.store } />
    }
}

/* Initialize stylesheet. */
const styles = {

}
