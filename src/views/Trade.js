import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import { Bootstrap } from '../components'

@observer
export default class Trade extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <h2>Trading Post</h2>

            <p class="lead text-center">
                <small>
                    Did you know you can easily trade your <strong class="text-warning">Taboo Gold</strong> for 100s of other cryptos like Bitcoin, Monero and others?
                </small>
            </p>

            <p class="lead text-center">
                Our NEW Trading Post is coming soon...
            </p>

            <Bootstrap store={ this.store } />

            <small>
                <em>Please Note: Taboo Gold is an ERC20-compatible crypto; therefore you are always able to trade TABOO on any decentralized exchange of your choice.</em>
            </small>

            <div class="text-center col-10 offset-1">
                <a href="https://forkdelta.github.io/#!/trade/0xd67cb3d1a748e25b8768ebf4218c7903f4c84823-ETH" target="_blank">
                    <img class="img-fluid" src="https://i.imgur.com/DZ8k9vp.png" />
                    <button class="btn btn-sm btn-block btn-outline-secondary">Open TABOO on ForkDelta</button>
                </a>
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
