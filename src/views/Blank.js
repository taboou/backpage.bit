import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class Blank extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <div class="container-fluid">
                <h2>Blank View</h2>

                <p>
                    Where would you like to go?<br />
                    <NavLink to="/">Take Me Home</NavLink>
                </p>
            </div>
        )
    }
}
