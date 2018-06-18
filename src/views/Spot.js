import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class Spot extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            spotlightId: null
        }
    }

    render() {
        return this._displaySpotlight()
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)

        /* Initialize spotlight id. */
        this._initSpotlightId()
    }

    _initSpotlightId() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the spotlight id as the last argument of the url. */
        const spotlightId = currentUrl.split('/').pop()

        /* Update state. */
        this.setState({ spotlightId })
    }

    _displaySpotlight() {
        const spotlightId = this.state.spotlightId

        if (!spotlightId) {
            return <div class="container-fluid">
                <h2>loading...</h2>
            </div>
        }

        /* Check for demo account. */
        if (spotlightId != '0x399c0fA056E3cF7aeC4A9E0BDa47Ee014DE3a5F0' &&
            spotlightId != 'LondynnLee') {
            if (spotlightId.slice(0, 2) == '0x') {
                return <div class="container-fluid">
                    <h2>coming soon...</h2>
                </div>
            }

            return <div class="container-fluid">
                <h2>{ spotlightId } is coming soon...</h2>
            </div>
        }

        return <div class="container-fluid">
            <h2>Londynn Lee's Spot</h2>

            <img
                src="https://i.imgur.com/LGEEu0t.png"
                class="img-thumbnail rounded mx-auto d-block" />

            <small>
                { spotlightId }
            </small>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
