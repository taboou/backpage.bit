import { autorun, computed, observable } from 'mobx'

import Web3 from 'web3'

class TabooStore {
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

	report() {
		if (this.posts.length === 0)
			return "<none>"
		
		return `Next todo: "${this.posts[0].task}". ` +
			`Progress: ${this.completedPostsCount} / ${this.posts.length}`
	}

    addPost(task) {
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


    loadHello() {
        const Web3 = require('web3')

        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
        } else {
            // set the provider you want from Web3.providers
            var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'))
            // var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
        }
        console.log('web3', web3)

        const abiArray = [{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"}],"name":"deleteAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"}],"name":"deleteBool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"}],"name":"deleteBytes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"}],"name":"deleteInt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"}],"name":"deleteString","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"}],"name":"deleteUint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_value","type":"address"}],"name":"setAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_value","type":"bool"}],"name":"setBool","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_value","type":"bytes"}],"name":"setBytes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_value","type":"int256"}],"name":"setInt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_value","type":"string"}],"name":"setString","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"setUint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getBool","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getBytes","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getInt","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getUint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]
        const address = '0x20c5f6d890c8777433203dd683eb8dccfdfc5fdd'
        const options = {}
        const myContract = new web3.eth.Contract(abiArray, address, options)

        const result = myContract.methods.getString(web3.utils.utf8ToHex('hello')).call()
        result.then(val => {
            console.log('%s [ %s ]', val, val.toString())
        })

    }

    /**
     * @notify Load the user's blockchain account.
     *
     * @dev Uses the `Web3` library to communicate with the blockchain.
     *      Use http://web3js.readthedocs.io/en/1.0/index.html as a reference.
     */
    loadNetworkStatus() {
        /* Initialize Web3 library. */
        const Web3 = require('web3')

        /* Initialize web3 object. */
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
        } else {
            // set the provider you want from Web3.providers
            var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'))
            // var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
        }

console.log('loading network status')
        /* Load the last block number. */
        web3.eth.getBlockNumber()
            .then(blockNum => {
console.log('found last block', blockNum)
            	this.eth.lastBlockNum = blockNum
            })
    }

    /**
     * Update Network Id
     *
     * @notify Updates the active blockchain network id.
     * @param networkId This numeric id of the active network.
     */
    updateNetworkId(networkId) {
    	this.eth.networkId = networkId
    }

    /**
     * Update Accounts
     *
     * @notify Updates the active list of blockchain accounts.
     * @param accounts An array of active accounts.
     */
    updateAccounts(accounts) {
    	this.eth.accounts = accounts
    }

    /**
     * Update Active Account Balance
     *
     * @notify Updates the balance from the active account.
     * @param balance Account value (in wei).
     */
    updateBalance(balance) {
    	this.eth.balance = balance
    }

}

const store = window.store = new TabooStore

export default store

autorun(() => {
	console.log('posts #1 --', store.posts[0])
	console.log('filter --', store.filter)
})