import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class SignOut extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Clear all account information from the store. */
        this.store.eth.accounts[0] = null
    }

    render() {
        return <div class="container-fluid">
            <h2>Thanks for visiting</h2>

            <p>
                You have been signed out of Backpage Zero.
            </p>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
