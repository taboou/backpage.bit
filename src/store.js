import { autorun, computed, observable } from 'mobx'

import Web3 from 'web3'

class TabooStore {

    /* Constructor. */
    constructor() {
        /* Load and set the current network status. */
        require('./store/loadNetworkStatus').default.bind(this)()

        /* Initialize the device info. */
        this.device = {}

        /* Initailize the device width. */
        this.device.width = window.innerWidth ||
                            document.documentElement.clientWidth ||
                            document.body.clientWidth;

        /* Initailize the device height. */
        this.device.height = window.innerHeight ||
                             document.documentElement.clientHeight ||
                             document.body.clientHeight;

        /* Initialize phone boolean. */
// FIXME: Utilize a 3rd-party library to properly detect phone status.
        this.device.isPhone = (this.device.width <= 480) ? true : false
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

    set addPost(post) {
		this.posts.push({
			post      : post,
			completed : false,
            assignee  : null
		})
	}

    agreeToDisclaimer = require('./store/agreeToDisclaimer').default
    denyDisclaimer    = require('./store/denyDisclaimer').default

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

    async loadPosts(districtId) {
        const Web3 = require('web3')

        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider)
        } else {
            /* Set the current provider. */
            let web3 = new Web3(new Web3.providers.HttpProvider(this.provider))
        }

        const abiArray = [{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"countryId","type":"bytes32"},{"name":"districtId","type":"bytes32"},{"name":"postId","type":"uint256"}],"name":"addPostId","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"_countryId","type":"bytes32"},{"name":"_districtId","type":"bytes32"},{"name":"_blockNum","type":"uint256"}],"name":"getPostIds","outputs":[{"name":"postIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalPosted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
        const address  = '0x0159e048889f308a1832752ac608b698955d78e2'
        const options  = {}
        const contract = new web3.eth.Contract(abiArray, address, options)

//         const accounts = await web3.eth.getAccounts()
//         const hash = web3.utils.soliditySha3(accounts[0], '.name')
// console.log('provider.name.<account>', hash)

        const posts = await contract.methods.getPostIds(districtId, districtId, 3202527).call()
console.log('[ %s ] %s', posts, JSON.stringify(posts))

        /* Update the store. */
        // this.provider.name = provider.name != '' ? provider.name : 'Unknown'

        return posts
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
