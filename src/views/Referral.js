import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class Referrer extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the district id as the last argument of the url. */
        const referralId = currentUrl.split('/').pop()
        console.log('referralId', referralId)

        return <div class="container-fluid">
            <h2>{ referralId }</h2>

            <p>
                Where would you like to go?<br />
                <NavLink to="/">Take Me Home</NavLink>
            </p>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
