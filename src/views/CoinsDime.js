import React from 'react'

import { observer } from 'mobx-react'

import {
    NavLink,
    Redirect
} from 'react-router-dom'

import request from 'superagent'

// https://github.com/zpao/qrcode.react
import QRCode from 'qrcode.react'

@observer
export default class CoinsDime extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize the state. */
        this.state = {
            depositAccount: '',
            depositAmount: 0.0
        }
    }

    render() {
        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Request a new deposit account. */
        if (accounts[0] === null)
            return <Redirect to="/signin" />

        return <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h1>Dime Pak</h1>

                    <NavLink to="/coins">
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary btnCancelOrder">
                            Cancel This Order
                        </button>
                    </NavLink>

                </div>

                <div class="col-12 col-sm-6">
                    <div class="text-center" style={ styles.qrcode }>
                        <QRCode
                            size = { 256 }
                            value= { this.state.depositAccount } />

                        <br/>

                        <small>{ this.state.depositAccount ? this.state.depositAccount : 'loading, please wait...' }</small>
                    </div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Request a new deposit account. */
        if (accounts[0] !== null)
            /* Update the spot price. */
            this._updateQuotes()
    }

    _requestNewDepositAccount () {
        /* Localize this. */
        const self = this

        /* Initialize endpoint. */
        let endpoint = 'https://cors.shapeshift.io/sendamount'

        /* Initialize trading pair. */
        const pair = 'btc_eth'

        /* Initialize deposit amount. */
        const depositAmount = this.state.depositAmount

        /* Initialize withdrawal address. */
        const withdrawal = self.store.eth.accounts[0].address

        /* Send api request. */
        request
            .post(endpoint)
            .send({ pair, depositAmount, withdrawal })
            .end((err, res) => {
                /* Check for jurisdiction restriction. */
                if (err || (res && res.status === 403)) {
                    if (err) console.error(err)

                    /* Reset endpoint. */
                    endpoint = 'https://api.taboou.com/v1/shapeshift/sendamount'

                    /* Request api send details. */
                    request
                        .post(endpoint)
                        .send({ pair, depositAmount, withdrawal })
                        .end((err, res2) => {
                            /* Display error, then continue. */
                            if (err) console.error(err)

                            /* Retrieve the deposit account (address). */
                            const depositAccount = res2.body.success.deposit
                            console.log('Shapeshift (proxy) deposit account:', depositAccount)

                            /* Update the state. */
                            self.setState({ depositAccount })
                        })
                } else {
                    /* Retrieve the deposit account (address). */
                    const depositAccount = res.body.success.deposit
                    console.log('Shapeshift deposit account:', depositAccount)

                    /* Update the state. */
                    self.setState({ depositAccount })
                }
            })
    }

    async _updateQuotes() {
        /* Localize this. */
        const self = this

        /* Initialize CCXT library. */
        const ccxt = require('ccxt')

        /* Initialize CoinMarketCap exchange. */
        const cmc = new ccxt.coinmarketcap

        /* Initialize markets. */
        const markets = await cmc.loadMarkets()

        /* Fetch Bitcoin (BTC) last price in USD. */
        let btcUsd = await cmc.fetchTicker('BTC/USD')
            btcUsd = btcUsd.last
            console.log('BTC => USD', btcUsd)

        /* Fetch Bitcoin (BTC) last price in USD. */
        let ethUsd = await cmc.fetchTicker('ETH/USD')
            ethUsd = ethUsd.last
            console.log('ETH => USD', ethUsd)

        /* Fetch Bitcoin to Ethereum exchange rate. */
        let btcEth = await cmc.fetchTicker('BTC/ETH')
            btcEth = btcEth.last
            console.log('BTC => ETH', btcEth)

        /* Calculate pak pricing. */
        const depositAmount  = (10 / btcUsd).toFixed(4)

        /* Update the state and request a deposit account. */
        self.setState({ depositAmount }, self._requestNewDepositAccount)
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
    },
    qrcode: {
        padding: 15
    }
}
