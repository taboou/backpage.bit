import React from 'react'

import { observer } from 'mobx-react'

import request from 'superagent'

import {
    CoinPakDime,
    CoinPakHome,
    Rewards
} from '../components'

@observer
export default class Buy extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize the state. */
        this.state = {
            dimePakBtcVal  : 0,
            hundoPakBtcVal : 0,
            kiloPakBtcVal  : 0,

            currentScreen  : 'home'
        }
    }

    render() {
        return <div class="container-fluid">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4 hidden-block">Taboo Gold Coin Paks</h1>

                <p class="lead">
                    Buy gold coins to instantly boost the <strong style={ styles.featuredTxt}>Lit Status</strong> of your ad posts.
                </p>
            </div>

            { this._displayManager() }
        </div>
    }

    componentDidMount() {
        /* Update the spot price. */
        this._updateQuotes()

        /* Initialize trade pair. */
        const pair = 'btc_eth'

        /* Initialize endpoint. */
        let endpoint = 'https://cors.shapeshift.io/marketinfo/' + pair

        request
            .get(endpoint)
            .end((err, res) => {
                /* Check for jurisdiction restriction. */
                if (err || (res && res.status === 403)) {
                    if (err) console.error(err)

                    /* Reset endpoint. */
                    endpoint = 'https://api.taboou.com/v1/shapeshift/marketinfo/' + pair

                    request
                        .get(endpoint)
                        .end((err, res2) => {
                            console.log('res2', res2)
                            if (err) console.error(err)

                            const rate = res2.body.rate
console.log('Shapeshift (proxy) BTC=>ETH rate:', rate)
                        })
                } else {
                    const rate = res.body.rate
console.log('Shapeshift BTC=>ETH rate:', rate)

                }
            })
    }

    _displayManager() {
        if (this.state.currentScreen == 'home')
            return <CoinPakHome
                store = { this.store }
                dimePakBtcVal  = { this.state.dimePakBtcVal }
                hundoPakBtcVal = { this.state.hundoPakBtcVal }
                kiloPakBtcVal  = { this.state.kiloPakBtcVal } />

        if (this.state.currentScreen == 'dime')
            return <CoinPakDime store = { this.store } />

        if (this.state.currentScreen == 'hundo')
            return <CoinPakHundo store = { this.store } />

        if (this.state.currentScreen == 'kilo')
            return <CoinPakKilo store = { this.store } />

        if (this.state.currentScreen == 'rewards')
            return <Rewards store = { this.store } />
    }

    async _handleNewOrder(_pak) {
        /* Localize this. */
        const self = this

        /* Initialize deposit amount in BTC. */
        let depositAmount = 0

        switch(_pak) {
            case 'dime':
                depositAmount = this.state.dimePakBtcVal
                this.setState({ currentScreen : 'dime' })
                break
            case 'hundo':
                depositAmount = this.state.hundoPakBtcVal
                this.setState({ currentScreen : 'hundo' })
                break
            case 'kilo':
                depositAmount = this.state.kiloPakBtcVal
                this.setState({ currentScreen : 'kilo' })
                break
        }
console.log('New Order for %s pak valued @ %s BTC', _pak.toUpperCase(), depositAmount)

        /* Initialize endpoint. */
        let endpoint = 'https://cors.shapeshift.io/sendamount'

        /* Initialize trading pair. */
        const pair = 'btc_eth'

        /* Initialize withdrawal address. */
        const withdrawal = '0x399c0fA056E3cF7aeC4A9E0BDa47Ee014DE3a5F0'

        /* Initialize return address. */
        const returnAddress = '34QUcPA3sBQ4Qf9y6Y7R2yBrNSgYt2ECjs'

        request
            .post(endpoint)
            .send({ pair, depositAmount, withdrawal, returnAddress })
            .end((err, res) => {
                /* Check for jurisdiction restriction. */
                if (err || (res && res.status === 403)) {
                    if (err) console.error(err)

                    /* Reset endpoint. */
                    endpoint = 'https://api.taboou.com/v1/shapeshift/sendamount'

                    /* Request api send details. */
                    request
                        .post(endpoint)
                        .send({ pair, depositAmount, withdrawal, returnAddress })
                        .end((err, res2) => {
console.log('res2', res2)
                            if (err) console.error(err)

                            /* Retrieve the deposit account (address). */
                            const depositAccount = res2.body.success.deposit
console.log('Shapeshift (proxy) deposit account:', depositAccount)

                            /* Update the store. */
                            self.store.depositAccount = depositAccount
                        })
                } else {
                    /* Retrieve the deposit account (address). */
                    const depositAccount = res.body.success.deposit
console.log('Shapeshift deposit account:', depositAccount)

                    /* Update the store. */
                    self.store.depositAccount = depositAccount
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
        const dimePakBtcVal  = (10 / btcUsd).toFixed(4)
        const hundoPakBtcVal = (85 / btcUsd).toFixed(4)
        const kiloPakBtcVal  = (750 / btcUsd).toFixed(4)

        this.setState({ dimePakBtcVal, hundoPakBtcVal, kiloPakBtcVal }, () => {
            /* Enable dime pak button. */
            $('#dimeOrder').prop('disabled', false)
            $('#dimeOrder').click(() => {
                self._handleNewOrder('dime')
            })

            /* Enable hundo pak button. */
            // $('#hundoOrder').prop('disabled', false)
            $('#hundoOrder').click(() => {
                self._handleNewOrder('hundo')
            })

            /* Enable kilo pak button. */
            // $('#kiloOrder').prop('disabled', false)
            $('#kiloOrder').click(() => {
                self._handleNewOrder('kilo')
            })

            /* Enable rewards button. */
            // $('#rewards').prop('disabled', false)
            $('#rewards').click(() => {
                self._handleNewOrder('rewards')
            })
        })
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
