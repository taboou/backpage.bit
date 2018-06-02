import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import request from 'superagent'

@observer
export default class CoinsRewards extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize the state. */
        this.state = {
        }
    }

    render() {
        return <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h1>Rewards</h1>

                    Earn great rewards for spreading the Backpage Zero word to your followers.
                </div>
            </div>
        </div>
    }

    componentDidMount() {
    }
}

/* Initialize stylesheet. */
const styles = {
    perCoinPrice: {
        fontSize: '0.65em'
    },
    featuredTxt: {
        color: 'rgb(210, 30, 30)',
        fontWeight: 'bold'
    }
}
