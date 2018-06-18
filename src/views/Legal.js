import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import { Heading } from '../components'

@observer
export default class Legal extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <Heading title={ 'Legal' } />

            <p class="lead">
                Preventing the exploitation of sex workers is a challenge for law enforcement agencies around the world.
            </p>
            
            <p>
                Providers are not only losing valuable property, but are also in danger of physical harm.
                Backpage Zero gives law enforcement agencies the ability to contribute to the reduction of exploitation in their jurisdiction, as well as gain information valuable to their investigations and operations.
            </p>

            <p>
                Backpage Zero offers law enforcement agencies the following benefits:
            </p>

            <ol>
                <li>Discourages mobile device theft by reducing the value of the device if it is blacklisted by participating operators</li>
                <li>Confirm the reported stolen or lost status of any found or turned in devices</li>
                <li>Confirm the network operator that reported the device stolen or lost, which helps with repatriation to the rightful owner</li>
                <li>Display of the device model characteristics for identification</li>
            </ol>
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
