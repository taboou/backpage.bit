import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import {
    Bootstrap,
    Heading
} from '../components'

@observer
export default class Messaging extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <Heading title={ 'Messaging' } />

            <p class="lead text-center">
                Our NEW Messaging is coming soon...
            </p>

            <Bootstrap store={ this.store } />

            <div>
                <ol>
                    <li>Live Chat</li>
                    <li>Direct Messaging</li>
                </ol>
            </div>
        </div>
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)
    }
}

/* Initialize stylesheet. */
const styles = {

}
