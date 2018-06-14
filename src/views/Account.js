import React from 'react'

import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

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

        this.state = {
            accountType: 'guest'
        }
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
            {/* PILL MENU ITEMS */}
            <ul class="nav nav-pills nav-justified" role="tablist">
                <li class="nav-item">
                    <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="pills-gold-tab" data-toggle="pill" href="#pills-gold" role="tab" aria-controls="pills-gold" aria-selected="false">Gold</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-ether-tab" data-toggle="pill" href="#pills-ether" role="tab" aria-controls="pills-ether" aria-selected="false">mΞTH</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-bitcoin-tab" data-toggle="pill" href="#pills-bitcoin" role="tab" aria-controls="pills-bitcoin" aria-selected="false"><FontAwesome name='btc'/>TC</a>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                {/* PROFILE TAB */}
                <div class="tab-pane fade mt-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <form>
                        <div class="form-group row">
                            <label for="nickname" class="col-sm-2 col-form-label">
                                <h5>Blockchain Nickname</h5>
                            </label>

                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="nickname" placeholder="Search for available nicknames" />

                                <div class="text-center">
                                    <small class="text-danger">blockchain registrations take <u>72 hours</u> to complete</small>
                                </div>
                            </div>
                        </div>

                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-form-label col-sm-2 pt-0">
                                    <h5>Account Type</h5>
                                </legend>

                                <div class="col-sm-10">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="optAccountType"
                                            id="optGuestAccount"
                                            value="guest"
                                            onChange= { this._handleAccountType }
                                            checked = { this.state.accountType === 'guest' } />
                                        <label class="form-check-label" for="optGuestAccount">
                                            Guest
                                        </label>
                                    </div>

                                    <div class="form-check disabled">
                                        <input class="form-check-input" type="radio" name="optAccountType" id="optResidentAccount" value="resident" disabled />
                                        <label class="form-check-label" for="optResidentAccount">
                                            Resident
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="optAccountType" id="optProviderAccount" value="provider" />
                                        <label class="form-check-label" for="optProviderAccount">
                                            Provider
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <div class="form-group row">
                            <div class="col-sm-2">
                                <h5>Message Notifications</h5>
                            </div>

                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="ensManager" disabled />

                                    <label class="form-check-label" for="ensManager">
                                        by Email
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="ensManager" disabled />

                                    <label class="form-check-label" for="ensManager">
                                        by Phone or SMS
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-10 offset-1 text-center">
                                <button type="submit" class="btn btn-lg btn-primary btn-block">
                                    Update Blockchain
                                </button>

                                <div>
                                    <small class="text-danger">requires mΞTH gas</small>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* GOLD TAB */}
                <div class="tab-pane fade show active" id="pills-gold" role="tabpanel" aria-labelledby="pills-gold-tab">
                    <div class="alert alert-warning mt-3 mb-0 text-center" role="alert">
                        <h2 class="text-warning">{ this._displayGold() }</h2>
                        <small class="text-muted"><em>{ this._displayGoldInUsd() }</em></small>
                    </div>

                    <div class="row">
                        <div class="col text-center">
                            <small class="text-muted">{ ethAddress }</small>
                        </div>
                    </div>

                    <div class="input-group mb-3 mt-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>

                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />

                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="gasFee">Blockchain Fee</label>
                        </div>

                        <select class="custom-select" id="gasFee">
                            <option value="10.5">Normal</option>
                            <option value="20.5">Fastest</option>
                            <option value="5.5">Cheapest</option>
                        </select>

                        <div class="mx-auto">
                            <small class="text-muted">
                                Estimated fee cost
                                ➧ <strong class="text-info">{ this._estimatedGasCost() }</strong> mΞTH
                                @ <em><strong class="text-info">10.5</strong> gWei</em>
                            </small>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <button class="btn btn-block btn-warning">Send Gold</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-block btn-outline-warning">Receive Gold</button>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-10 offset-1">
                            <button class="btn btn-lg btn-block btn-warning">BUY GOLD</button>
                        </div>
                    </div>
                </div>

                {/* ETHER TAB */}
                <div class="tab-pane fade" id="pills-ether" role="tabpanel" aria-labelledby="pills-ether-tab">
                    <div class="alert alert-secondary mt-3 mb-0 text-center" role="alert">
                        <h2 class="text-secondary">{ this._displayGas() }</h2>
                        <small class="text-muted"><em>{ this._displayGasInUsd() }</em></small>
                    </div>

                    <div class="row">
                        <div class="col text-center">
                            <small class="text-muted">{ ethAddress }</small>
                        </div>
                    </div>

                    <div class="input-group mb-3 mt-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>

                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />

                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="gasFee">Blockchain Fee</label>
                        </div>

                        <select class="custom-select" id="gasFee">
                            <option value="10.5">Normal</option>
                            <option value="20.5">Fastest</option>
                            <option value="5.5">Cheapest</option>
                        </select>

                        <div class="mx-auto">
                            <small class="text-muted">
                                Estimated fee cost
                                ➧ <strong class="text-info">{ this._estimatedGasCost() }</strong> mΞTH
                                @ <em><strong class="text-info">10.5</strong> gWei</em>
                            </small>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <button class="btn btn-block btn-secondary">Send mΞTH</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-block btn-outline-secondary">Receive mΞTH</button>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-10 offset-1">
                            <button class="btn btn-lg btn-block btn-secondary">BUY MΞTH</button>
                        </div>
                    </div>
                </div>

                {/* BITCOIN TAB */}
                <div class="tab-pane fade" id="pills-bitcoin" role="tabpanel" aria-labelledby="pills-bitcoin-tab">
                    <div class="alert alert-success mt-3 mb-0 text-center" role="alert">
                        <h2 class="text-success">{ this._displayBitcoin() }</h2>
                        <small class="text-muted"><em>{ this._displayBitcoinInUsd() }</em></small>
                    </div>

                    <div class="row">
                        <div class="col text-center">
                            <small class="text-muted">{ btcAddress }</small>
                        </div>
                    </div>

                    <div class="input-group mb-3 mt-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                        </div>

                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />

                        <div class="input-group-append">
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="gasFee">Blockchain Fee</label>
                        </div>

                        <select class="custom-select" id="gasFee">
                            <option value="10.5">Normal</option>
                            <option value="20.5">Fastest</option>
                            <option value="5.5">Cheapest</option>
                        </select>

                        <div class="mx-auto">
                            <small class="text-muted">
                                Estimated fee cost
                                ➧ <strong class="text-info">{ this._estimatedMinerCost() }</strong> mBTC
                                @ <em><strong class="text-info">62.5</strong>  sat/B</em>
                            </small>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <button class="btn btn-block btn-success">Send <FontAwesome name='btc'/>itcoin</button>
                        </div>
                        <div class="col">
                            <button class="btn btn-block btn-outline-success">Receive <FontAwesome name='btc'/>itcoin</button>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-10 offset-1">
                            <button class="btn btn-lg btn-block btn-success">BUY <FontAwesome name='btc'/>ITCOIN</button>
                        </div>
                    </div>
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
        const gasDisplay = numeral(microEth / 1000).format('0,0.00')

        return gasDisplay
    }

    _displayGasInUsd () {
        return 'USD $1,246.94'
    }

    _estimatedGasCost () {
        /* Estimate gas cost based on mETH. */
        return parseFloat(20000 * 0.0000105).toFixed(2)
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

    _displayGoldInUsd () {
        return 'USD $10,000.00'
    }

    _displayBitcoin () {
        return '0.00'
    }

    _displayBitcoinInUsd () {
        return 'USD $0.00'
    }

    _estimatedMinerCost () {
        return '0.12'
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

    _handleAccountType (e) {
        console.log('Account type change', e.currentTarget.value)
    }
}

/* Initialize stylesheet. */
const styles = {
}
