import React from 'react'
 
import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

import Disclaimer from '../components/Disclaimer'

@observer
export default class NewPost extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        /* Retrieve the boolean for disclaimer agreement. */
        const { hasAgreedToDisclaimer } = this.store

        /* Process display. */
        if (!hasAgreedToDisclaimer)
            return <Disclaimer store={ this.store } />

        return (
            <div class="container-fluid">
                We are good to go now folks!

                <h2>NEW POST</h2>
            </div>            
        )
    }
}
