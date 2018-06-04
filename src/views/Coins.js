import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import request from 'superagent'

@observer
export default class Coins extends React.Component {
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
                    Buy gold coins to instantly boost the <strong style={ styles.featuredTxt}>Lit Count</strong> of your ad posts.
                </p>
            </div>

            <div class="card-deck text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">DIME PAK</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $10<br/>
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.state.dimePakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>10 TABOO</span> Gold Coins</li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <NavLink to="/coins-dime">
                            <button disabled type="button" id="dimeOrder" class="btn btn-lg btn-block btn-outline-primary">
                                Place An Order
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div class="card mb-4 box-shadow">
                    <div class="card-header bg-info text-white">
                        <h4 class="my-0 font-weight-normal">HUNDO PAK</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $85<br/>
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.state.hundoPakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>100 TABOO</span> Gold Coins</li>
                            <li>Save 15% ($0.85 / coin)</li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button disabled type="button" id="hundoOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Place An Order
                        </button>
                    </div>
                </div>

                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">KILO PAK</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $750<br/>
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.state.kiloPakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>1,000 TABOO</span> Gold Coins</li>
                            <li>Save 25% ($0.75 / coin)</li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button disabled type="button" id="kiloOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Place An Order
                        </button>
                    </div>
                </div>

                <div class="card mb-4 box-shadow">
                    <div class="card-header bg-warning text-white">
                        <h4 class="my-0 font-weight-normal">REWARDS</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            FREE GOLD<br/>
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                EVERYDAY
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>1 TABOO</span> <u>per day</u> for each</li>
                            <li><small>use of #Backpage0 on Twitter</small></li>
                            <li><small>use of #Backpage0 on Instagram</small></li>
                            <li><small>link to Backpage0.com on Reddit</small></li>
                            <li><small class="text-muted">RESTRICTIONS APPLY</small></li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button type="button" id="hundoOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col text-center">
                    <em>Please contact <a href="mailto:support@taboou.com">support@taboou.com</a> for assistance with larger value and/or non-Bitcoin (BTC) orders.</em>
                </div>
            </div>
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
