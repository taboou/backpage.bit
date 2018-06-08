import React from 'react'

import { observer } from 'mobx-react'

import {
    NavLink,
    Redirect
} from 'react-router-dom'

@observer
export default class Account extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize default account settings. */
        this.accounts = []
    }

    render() {
        /* Retrieve crypto accounts. */
        const ethAccount = this.store.eth.accounts[0]
        const btcAccount = this.store.btc.accounts[0]

        /* Validate crypto accounts. */
        if (ethAccount === null || btcAccount === null) {
            /* Set authorization redirect target. */
            this.store.authRedirect = '/account'

            /* Redirect to sign in screen. */
            return <Redirect to="/signin" />
        }

        /* Initialize addresses. */
        let ethAddress = null
        let btcAddress = null

        /* Retrieve the Ethereum address. */
        if (ethAccount && ethAccount.address)
            ethAddress = ethAccount.address
        else
            ethAddress = 'Unknown account'

        /* Retrieve the Bitcoin address. */
        if (btcAccount && btcAccount.address)
            btcAddress = btcAccount.address
        else
            btcAddress = 'Unknown account'

        return <div class="container-fluid">
            <div class="row">
                <div class="col text-center">
                    <h1 class="text-info text-center">
                        { this.store.addressShortDisplay }
                        <div class="text-muted" style={ styles.fullAddress }>{ ethAddress }</div>
                    </h1>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-5 text-right">
                    <small class="text-muted">(Ether)</small> Gas
                </div>
                <div class="col text-info">
                    <h3>{ this._displayGas() }</h3>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-5 text-right">
                    Taboo Gold
                </div>
                <div class="col text-info">
                    <h3>{ this._displayGold() }</h3>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button class="btn btn-block btn-warning">Send Ether</button>
                </div>
                <div class="col">
                    <button class="btn btn-block btn-success">Receive Ether</button>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col text-center">
                    <h5>Bitcoin Account</h5>
                </div>
            </div>

            <div class="row">
                <div class="col text-center text-info">
                    <small>{ btcAddress }</small>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <button class="btn btn-block btn-warning">Send Bitcoin</button>
                </div>
                <div class="col">
                    <button class="btn btn-block btn-success">Receive Bitcoin</button>
                </div>
            </div>

        </div>
    }

    componentDidMount() {
        setTimeout(this._updateBalances, 2000)
    }

    _displayGas () {
        /* Import numeral library. */
        const numeral = require('numeral')

        /* Retrieve the ether balance. */
        const weiBalance = this.store.weiBalance

        /* Validate wei balance. */
        if (!weiBalance)
            return 'loading...'

console.log('weiBalance', weiBalance)

        /* Calculate the micro Ether value. */
        const microEth = weiBalance.div(1 * 10 ** 12)
console.log('microEth', microEth.toString())

        /* Format gas for display. */
        const gasDisplay = numeral(microEth / 1000).format('0,0.00') + ' mΞ'

        return gasDisplay
    }

    _displayGold () {
        /* Import numeral library. */
        const numeral = require('numeral')

        /* Retrieve the ether balance. */
        const goldBalance = this.store.goldBalance

        /* Validate wei balance. */
        if (!goldBalance)
            return 'loading...'

console.log('goldBalance', goldBalance)

        /* Format gold for display. */
        const goldDisplay = numeral(goldBalance).format('0,0.00')

        return goldDisplay
    }

    _updateBalances () {
        /* Localize this. */
        const self = this

        /* Initialize ethers. */
        const ethers = this.store.ethers

        /* Initialize providers. */
        const providers = ethers.providers

        /* Initialize default provider. */
        const provider = providers.getDefaultProvider('ropsten')

        /* Retrieve crypto accounts. */
        const ethAccount = this.store.eth.accounts[0]
        const btcAccount = this.store.btc.accounts[0]

        /* Initialize addresses. */
        let ethAddress = null
        let btcAddress = null

        /* Retrieve the Ethereum address. */
        if (ethAccount && ethAccount.address)
            ethAddress = ethAccount.address
        else
            ethAddress = 'Unknown account'
console.log('ethAddress', ethAddress)
        /* Retrieve the Bitcoin address. */
        if (btcAccount && btcAccount.address)
            btcAddress = btcAccount.address
        else
            btcAddress = 'Unknown account'

        /* Retrieve the balance for the active account. */
        provider.getBalance(ethAddress)
            .then(balance => {
                console.log('balance', balance)
                // balance is a BigNumber (in wei); format is as a sting (in ether)
                const etherString = ethers.utils.formatEther(balance)

                console.log('Balance: ' + etherString)

                console.log('parseFloat(etherString)', parseFloat(etherString))

                /* Update the store. */
                self.store.balance = balance
            })

        provider.getTransactionCount(ethAddress)
            .then(transactionCount => {
                console.log('Total Transactions Ever Send: ' + transactionCount)
            })

        /* Load gold coin balance. */
        this.store.loadGoldBalance()
    }
}

/* Initialize stylesheet. */
const styles = {
    fullAddress: {
        fontSize: '0.3em'
    }
}
