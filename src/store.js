import { autorun, computed, observable } from 'mobx'

import Web3 from 'web3'

class TabooStore {

    constructor() {
        /* Load and set the current network status. */
        const loadNetworkStatus = require('./store/loadNetworkStatus')
              loadNetworkStatus.loadNetworkStatus.bind(this)()
    }

	/* Initialize system variables. */
	@observable hasAgreedToDisclaimer = false

	@observable posts = ['come by tonight', 'new provider']
	@observable filter = ''

	@observable eth = {
		lastBlockNum : 'loading...',
		network      : 'ropten',
		provider     : 'https://ropsten.infura.io/',	// mainnet.infura.io
		networkId    : null,
		accounts     : [],
		balance      : ''
	}

    @observable provider = {
        name : '',
        age  : 0
    }

	/* Set a global web3 object (especially for utility functions). */
	web3 = new Web3(new Web3.providers.HttpProvider(this.eth.provider))

	@computed get ethBalance() {
		/* Retrieve the balance. */
		let balance = this.eth.balance

		/* Convert balance to Wei. */
		balance = this.web3.utils.fromWei(balance, 'ether')

		/* Format to 6 decimals. */
		balance = parseFloat(balance).toFixed(6)

		return balance
	}

	@computed get networkName() {
        switch(this.eth.networkId) {
            case 1:
                return 'Mainnet'
            case 3:
                return 'Ropsten'
            default:
                return 'Unknown network'
        }
	}

	get completedPostsCount() {
    	return this.posts.filter(
			todo => todo.completed === true
		).length
    }

    set addPost(task) {
		this.posts.push({
			task      : task,
			completed : false,
            assignee  : null
		})
	}

	/**
	 * @notice Posters must agree to the service disclaimer. At the moment
	 *		   all that is required is a button click. However, content
	 *         control in development & testing include:
	 *             1. Phone number verification
	 *             2. ID verification
	 *             3. Other 3rd-party service verification
	 */
	agree() {
console.log('i agree to eerything u say', this.hasAgreedToDisclaimer)

		/* Toggle agreed for boolean. */
		this.hasAgreedToDisclaimer = true
	}

    async loadProvider() {
        const Web3 = require('web3')

        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
        } else {
            /* Set the current provider. */
            let web3 = new Web3(new Web3.providers.HttpProvider(this.provider))
        }

        const abiArray = [{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getProvider","outputs":[{"name":"name","type":"string"},{"name":"age","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"}],"name":"addProvider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
        const address  = '0x6feb7e63242fcb536d409f40f8eb985d4a7ba750'
        const options  = {}
        const contract = new web3.eth.Contract(abiArray, address, options)

        const accounts = await web3.eth.getAccounts()
        const hash = web3.utils.soliditySha3(accounts[0], '.name')
console.log('provider.name.<account>', hash)

        const provider = await contract.methods.getProvider(accounts[0]).call()
console.log('[ %s ] %s', provider.name, JSON.stringify(provider))

        /* Update the store. */
        this.provider.name = provider.name != '' ? provider.name : 'Unknown'

        return provider
    }

    /**
     * Update Network Id
     *
     * @notify Updates the active blockchain network id.
     * @param networkId This numeric id of the active network.
     */
    set networkId(networkId) {
    	this.eth.networkId = networkId
    }

    /**
     * Update Accounts
     *
     * @notify Updates the active list of blockchain accounts.
     * @param accounts An array of active accounts.
     */
    set accounts(accounts) {
    	this.eth.accounts = accounts
    }

    /**
     * Update Active Account Balance
     *
     * @notify Updates the balance from the active account.
     * @param balance Account value (in wei).
     */
    set balance(balance) {
    	this.eth.balance = balance
    }

}

const store = window.store = new TabooStore

export default store

autorun(() => {
	console.log('posts #1 --', store.posts[0])
	console.log('filter --', store.filter)
})
