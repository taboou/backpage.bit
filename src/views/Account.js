import React from 'react'
 
import { observer } from 'mobx-react'

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
        return (
            <div class="container-fluid">
                <h2>My Account</h2>
                
                <div class="row">
                    <div class="col-3 text-right">
                        Blockchain
                    </div>
                    <div class="col">
                        { this.store.networkName }
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 text-right">
                        Account
                    </div>
                    <div class="col">
                        { this.store.eth.accounts[0] }
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 text-right">
                        Balance
                    </div>
                    <div class="col">
                        Ξ{ this.store.ethBalance }
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        /* Load the accont info from the blockchain. */
        setTimeout(this.initWeb3.bind(this), 500)
    }

    /**
     * Initilize Web3
     *
     * @notify This will initialize the web3 object from either an:
     *             1. Inpage provider (eg MetaMask, TrustWallet)
     *             2. Embedded Web3 module
     */
    initWeb3() {
        /* Assign local context. */
        const self = this

        /* Initialize Web3 library. */
        const Web3 = require('web3')

        /* Initialize web3 object (if necessary). */
        if (typeof web3 == 'undefined')
            var web3 = null

        /* Assign local web3 to window.web3. */
        if (window.web3)
            web3 = window.web3

        /* Initialize web3 object. */
        if (typeof web3 !== 'undefined') {
            /* Initialize the current provider. */
            web3 = new Web3(web3.currentProvider)
        } else {
            /* Retrieve the current provider. */
            let provider = self.store.eth.provider

            /* Create a new Web3 provider object. */
            provider = new Web3.providers.HttpProvider(provider)

            /* Initialize the current provider. */
            web3 = new Web3(provider)
        }

        /* Load the active accounts. */
        self.updateNetworkId(web3)

        /* Load the active accounts. */
        self.loadAccounts(web3)
    }

    updateNetworkId(web3) {
        /* Assign local context. */
        const self = this

        web3.eth.net.getId()
            .then(networkId => {
console.log('The current network Id is', networkId)

                /* Update the store. */
                self.store.updateNetworkId(networkId)
            })
    }

    /**
     * Load Accounts
     *
     * @notify Loads the user's blockchain account(s).
     *
     * @dev Uses the `Web3` library to communicate with the blockchain.
     *      Use http://web3js.readthedocs.io/en/1.0/index.html as a reference.
     */
    loadAccounts(web3) {
        /* Assign local context. */
        const self = this

        /* Retrieve the active accounts from the blockchain provider. */
        web3.eth.getAccounts()
            .then(accounts => {
                console.log('Active accounts', accounts)
                
                /* Update the store. */
                self.store.updateAccounts(accounts)

                /* Load balances. */
                if (accounts && accounts.length > 0)
                    self.loadBalances(web3, accounts)
            })
            .catch(console.error)
    }

    /**
     * Load Balances
     *
     * @notify Will load all active balances.
     */
    loadBalances(web3, accounts) {
        /* Assign local context. */
        const self = this

        /* Retrieve the primary account. */
        const account = accounts[0]

        web3.eth.getBalance(account)
            .then(balance => {
                /* Update the store. */
                self.store.updateBalance(balance)

                const ethValue = web3.utils.fromWei(balance, 'ether')

                console.log(
                    'Balance of [ %s ] : %s ( %s )', 
                    account, balance, ethValue)
            })
            .catch(console.error)
    }
}
