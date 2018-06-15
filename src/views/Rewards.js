import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

@observer
export default class Rewards extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <h2>Rewards</h2>

            <p class="lead">
                Are you looking for some <strong>FREE <span class="text-warning">GOLD</span>?</strong>
            </p>

            <div>
                <ol>
                    <li><NavLink to="/blog/golden-pen">A Golden Pen <FontAwesome name="edit" /></NavLink></li>
                    <li>Golden Tweets on <FontAwesome name="twitter" /></li>
                    <li>Golden Posts on <FontAwesome name="reddit" /></li>
                    <li>Golden Pics on <FontAwesome name="instagram" /></li>
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
