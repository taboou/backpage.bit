import React from 'react'

import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

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
            orderId: '',
            depositAccount: '',
            depositAmount: 0.0,
            withdrawalAmount: 0.0
        }
    }

    render() {
        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Request a new deposit account. */
        if (accounts[0] === null) {
            /* Set authorization redirect target. */
            this.store.authRedirect = '/coins-dime'

            /* Redirect to sign in screen. */
            return <Redirect to="/signin" />
        }

        return <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h1>Dime Pak</h1>

                    <div>
                        Show user balance information and order list here
                    </div>
                </div>

                <div class="col-12 col-sm-6">
                    <div class="text-center" style={ styles.qrcode }>
                        <h4 class="text-center">
                            <FontAwesome name='btc'/>itcoin Deposit Amount<br/>
                            { this.state.depositAmount }
                        </h4>

                        { this._displayQrCode() }
                    </div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)

        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Request a new deposit account. */
        if (accounts[0] !== null)
            /* Update the spot price. */
            this._updateQuotes()
    }

    _displayQrCode () {
        if (this.state.depositAccount) {
            /* Initialize deposit amount. */
            const depositAmount = this.state.depositAmount

            /* Initialize bitcoin uri. */
            // https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki
            const uri = `bitcoin:${this.state.depositAccount}?amount=${depositAmount}&label=Taboo Gold Dime Pak`

            /* Return the QR Code. */
            return <div class="text-center">
                <a href={ uri }>
                    <QRCode size = { 256 } value= { uri } />
                </a>

                <div class="text-center">
                    <small><em>
                        { this.state.depositAccount }
                    </em></small>
                </div>

                <div class="col-10 offset-1 mt-3">
                    <a href={ uri } class="btn btn-primary btn-lg btn-block">
                        Open Bitcoin Wallet
                    </a>
                    <button
                        type="button"
                        class="btn btn-lg btn-block btn-success mt-3"
                        onClick={ this._handleComplete.bind(this) }>
                        Complete
                    </button>
                </div>
            </div>
        } else {
            /* Return a BTC loading image. */
            // TODO Move all images to IPFS
            return <div class="text-center">
                <img class="img-fluid" src="https://i.imgur.com/p3Gx6oP.gif" />

                <h4 class="text-center">
                    loading, please wait...
                </h4>

                <div class="col-10 offset-1 mt-3">
                    <NavLink to="/coins">
                        <button type="button" class="btn btn-lg btn-block btn-outline-danger">
                            Cancel
                        </button>
                    </NavLink>
                </div>
            </div>
        }
    }

    _requestNewDepositAccount () {
        /* Localize this. */
        const self = this

        /* Initialize endpoint. */
        let endpoint = 'https://cors.shapeshift.io/shift'

        /* Initialize trading pair. */
        const pair = 'btc_eth'

        /* Initialize deposit amount. */
        const depositAmount = this.state.depositAmount

        /* Initialize withdrawal address. */
        const withdrawal = self.store.eth.accounts[0].address

        /* Initilize purchase amount. */
        const purchaseAmount = 10

        /* Send api request. */
        request
            .post(endpoint)
            .send({ pair, withdrawal })
            .end((err, res) => {
                /* Check for jurisdiction restriction. */
                if (err || (res && res.status === 403)) {
                    if (err) console.error(err)

                    /* Reset endpoint. */
                    endpoint = 'https://api.taboou.com/v1/shapeshift/shift/'

                    /* Request api send details. */
                    request
                        .post(endpoint)
                        .send({ pair, withdrawal })
                        .end((err, res2) => {
                            /* Display error, then continue. */
                            if (err) console.error(err)

                            /* Retrieve the order id. */
                            const orderId = res2.body.orderId

                            /* Retrieve the deposit account (address). */
                            const depositAccount = res2.body.deposit

                            /* Retrieve the withdrawal amount. */
                            const withdrawalAmount = res2.body.withdrawalAmount

                            /* Update the state. */
                            self.setState({
                                orderId,
                                depositAccount,
                                withdrawalAmount
                            }, () => {
                                /* Send order request to the API server. */
                                self._createOrder(depositAccount, orderId, purchaseAmount)
                            })
                        })
                } else {
                    /* Retrieve the order id. */
                    const orderId = res.body.orderId

                    /* Retrieve the deposit account (address). */
                    const depositAccount = res.body.deposit

                    /* Retrieve the withdrawal amount. */
                    const withdrawalAmount = res.body.withdrawalAmount

                    /* Update the state. */
                    self.setState({
                        orderId,
                        depositAccount,
                        withdrawalAmount
                    }, () => {
                        /* Send order request to the API server. */
                        self._createOrder(depositAccount, orderId, purchaseAmount)
                    })
                }
            })
    }

    _createOrder(paymentAccount, xchgOrderId, amount) {
        /* Localize this. */
        const self = this

        /* Initialize moment module. */
        const moment = require('moment')

        /* Retrieve private key from active account. */
        const privateKey = this.store.eth.accounts[0].privateKey

        /* Initizlize the wallet. */
        const wallet = new this.store.ethers.Wallet(privateKey)

        /* Generate timestamp (in milliseconds). */
        const nonce = moment().valueOf()

        /* Create message for signing. */
        const msgForSigning = 'auth.for.taboou.api.v1.' + nonce

        /* Create signed message. */
        const signed = wallet.signMessage(msgForSigning)

        /* Initilize authorization signature. */
        const auth = `TABOO-TOKEN Signature=${signed}, Nonce=${nonce}`

        /* Initialize endpoint. */
        let endpoint = 'https://api.taboou.com/v1/coins/'

        /* Send api request. */
        request
            .post(endpoint)
            .send({ paymentAccount, xchgOrderId, amount })
            .set('Authorization', auth)
            .set('accept', 'json')
            .end((err, res) => {
                if (err) return console.error(err)

                console.log('Coins API Response', res)
            })
    }

    async _handleComplete () {
        console.log('complete order', this)

        /* Initialize ethers module. */
        const ethers = require('ethers')

        /* Initialize contract options. */
        const options  = {
            // gasLimit: 250000,
            // gasPrice: CONFIG.gasPrice,
            // nonce: 0,
            value: ethers.utils.parseEther('0.001')
        }
        // const options = {}

        const provider = ethers.providers.getDefaultProvider('ropsten')

        const privateKey = this.store.eth.accounts[0].privateKey

        // let wallet = this.store.eth.accounts[0]
        //     wallet.provider = provider
        const wallet = new ethers.Wallet(privateKey, provider)

        /* Gold Mine Address. */
        const goldMineAddress = '0x080dE71088dB794f47d61eAeA881412C04d3E7F6'

        /* Gold Mine ABI. */
        const goldMineAbi = [{"constant":true,"inputs":[],"name":"getBalances","outputs":[{"name":"gold","type":"uint256"},{"name":"gas","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orderId","type":"bytes32"}],"name":"pendingOrder","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isMineActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orderId","type":"bytes32"}],"name":"getOrderStatus","outputs":[{"name":"owner","type":"address"},{"name":"paymentAccount","type":"string"},{"name":"xchgOrderId","type":"string"},{"name":"amount","type":"uint256"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_paymentAccount","type":"string"},{"name":"_xchgOrderId","type":"string"},{"name":"_amount","type":"uint256"}],"name":"createOrder","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_paymentAccount","type":"string"},{"name":"_xchgOrderId","type":"string"},{"name":"_amount","type":"uint256"}],"name":"createOrder","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"clearGoldMine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getQuotes","outputs":[{"name":"taboo_usd_last","type":"uint256"},{"name":"taboo_usd_timestamp","type":"uint256"},{"name":"eth_usd_last","type":"uint256"},{"name":"eth_usd_discount","type":"uint256"},{"name":"eth_usd_timestamp","type":"uint256"},{"name":"btc_usd_last","type":"uint256"},{"name":"btc_usd_timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableGoldMine","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_orderId","type":"bytes32"}],"name":"completeOrder","outputs":[{"name":"success","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"tabooDb","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orderId","type":"bytes32"},{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"OrderCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orderId","type":"bytes32"}],"name":"OrderPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"orderId","type":"bytes32"},{"indexed":false,"name":"received","type":"uint256"},{"indexed":false,"name":"sent","type":"uint256"}],"name":"OrderCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"}]

        /* Initialize the contract. */
        const contract = new ethers.Contract(
            goldMineAddress, goldMineAbi, wallet)

        // let transaction = await contract
        //     .createOrder(_owner, _paymentAccount, _xchgOrderId, _amount)
        //     .catch(error => console.log('Oops, something failed to send', error))
        const orderId = '0x62b24c84ac31a7e7ff157813e484a6b53050ae5080dcc4ef2bd9a20b5be81890'

        let transaction = await contract
            .completeOrder(orderId, options)
            .catch(error => console.log('Oops, something failed to send', error))
console.log('Transaction result: ', transaction)
    }

    async _updateQuotes() {
        /* Localize this. */
        const self = this

        /* Initialize CCXT library. */
        const ccxt = require('ccxt')

        /* Initialize CoinMarketCap exchange. */
        const cmc = new ccxt.coinmarketcap()

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
