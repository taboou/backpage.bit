import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

@observer
export default class Trade extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            goldTotal: 3000000,
            goldRemaining: 0,
            pctRemaining: 0
        }
    }

    render() {
        return <div class="container-fluid">
            <h2>Trading Post</h2>

            <p class="lead text-center">
                <small>
                    Did you know you can easily trade your <strong class="text-warning">Taboo Gold</strong> for 100s of other cryptos like Bitcoin, Monero and others?
                </small>
            </p>

            <div class="alert alert-warning" role="alert">
                <h3 class="text-center mb-3">
                    HELP US BUILD...
                </h3>

                <div class="progress">
                    <div
                        class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                        role="progressbar"
                        aria-valuenow="5"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '5%' }} />
                </div>

                <div class="text-center">
                    <small><em>
                        { this.state.pctRemaining }% gold coins remaining
                    </em></small>
                </div>

                <h5 class="text-center mt-3">
                    { this.state.goldRemaining } of 3,000,000
                </h5>

                <div class="col-10 offset-1 mt-3">
                    <NavLink to="/coins">
                        <button class="btn btn-lg btn-block btn-warning">BUY GOLD</button>
                    </NavLink>
                </div>

                <div class="text-center mt-1">
                    <a href="https://ropsten.etherscan.io/address/0x080dE71088dB794f47d61eAeA881412C04d3E7F6"
                        target="_blank"
                        class="btn btn-outline-warning"
                        style={ styles.contractAddress }>
                        0x080dE71088dB794f47d61eAeA881412C04d3E7F6
                        &nbsp;<FontAwesome name='external-link' />
                    </a>
                </div>
            </div>

            <p class="lead text-center">
                Our NEW Trading Post is coming soon...
            </p>

            <p>
                Thank you for your patience.
                As we progress through the <strong>Boostraping Phase</strong> of Backpage Zero, some 3rd-party integrations will remain remain offline until we can further develop our internal services.
            </p>

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

        this._loadGoldBalances()
    }

    async _loadGoldBalances() {
        /* Localize this. */
        const self = this

        /* Initialize Taboo Gold address. */
        const account = '0x2B758418542D30B0B16247c5D96df9b5864C86EA'

        /* Initialize provider. */
        const provider = this.store.ethers.providers.getDefaultProvider('ropsten')

        /* Initialize contract. */
        const contract = new this.store.ethers.Contract(
            account, this.store.tabooGoldAbi, provider)

        /* Retrieve current account address. */
        let address = '0x5Ef374D71e3ff472d08467a248D4d14831e36880'

        var callPromise = contract.balanceOf(address)
            .then(function (balance) {
                /* Initialize numeral. */
                const numeral = require('numeral')

                /* Retrieve the gold amount remaining. */
                let goldRemaining = balance.div(1000000)
                // console.log('Gold remaining', goldRemaining.toString())

                /* Calculate the percentage remaining. */
                const pctRemaining = goldRemaining.div(30000).toNumber()
                // console.log('% remaining', pctRemaining.toString())

                /* Format gold remaining. */
                goldRemaining = numeral(goldRemaining).format('0,0')

                /* Update state. */
                self.setState({ goldRemaining, pctRemaining })
            })
    }
}

/* Initialize stylesheet. */
const styles = {
    contractAddress: {
        fontSize: '0.6em',
        padding: '2px 5px'
    }
}
