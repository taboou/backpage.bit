import { autorun, computed, observable } from 'mobx'

import Ethers from 'ethers'
import Web3 from 'web3'

import districts from './data/districts'

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

    /* Initialize the active (default) district. */
    @observable activeDistrict = null

	@observable posts = ['come by tonight', 'new provider']
	@observable filter = ''
	@observable errorMsg = ''

	@observable eth = {
		lastBlockNum : 'loading...',
		network      : 'ropsten',
		provider     : 'https://ropsten.infura.io/',	// mainnet.infura.io
		networkId    : null,
		accounts     : [null],        // NOTE: static page render problem w/out `[null]`
		balance      : ''
	}

    @observable btc = {
        lastBlockNum : 'loading...',
		accounts     : [null],        // NOTE: static page render problem w/out `[null]`
		balance      : ''
    }

    @observable provider = {
        name : '',
        age  : 0
    }

	/* Set a global web3 object (especially for utility functions). */
	web3 = new Web3(new Web3.providers.HttpProvider(this.eth.provider))

    /* Set global ethers object (especially for utility functions). */
    ethers = Ethers

    /* Set global prvodier object (especially for blockchain requests). */
    provider = Ethers.providers.getDefaultProvider(this.eth.network)

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

    /**
     * Retrieves the district's id (slug) from the url.
     *
     * @notice A helper function to parse out the post id from the url.
     *
     * @dev TODO Handle this using ReactJs native router function.
     */
    get loadedDistrict() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the postid as the last argument of the url. */
        const postId = currentUrl.split('/').pop()

        /* Update the store's active district. */
        this.activeDistrict = postId

        return postId
    }

    get districtManagerAbi() {
        return [{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"districtId","type":"address"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"postId","type":"bytes32"},{"indexed":false,"name":"post","type":"string"}],"name":"TabooSocialPost","type":"event"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_post","type":"string"}],"name":"addPost","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_post","type":"string"}],"name":"addPost","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tabooDb","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"child","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"coinBalanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minBudget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minRent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pctBudgetIncrease","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"taxRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
    }

    set addPost(_post) {
        /* Initialize moment module. */
        const moment = require('moment')

        /* Initialize default provider. */
        const provider = this.ethers.providers.getDefaultProvider('ropsten')

        /* Retrieve private key from active account. */
        const privateKey = this.eth.accounts[0].privateKey
// console.log('privateKey', privateKey)

        const wallet = new this.ethers.Wallet(privateKey, provider)
// console.log('wallet', wallet)

        /* Generate timestamp (in milliseconds). */
        const nonce = moment().valueOf()
// console.log('nonce', nonce)

        /* Create message for signing. */
        const msgForSigning = 'auth.for.taboou.api.v1.' + nonce
// console.log('msg to be signed ->', msgForSigning)

        /* Create signed message. */
        const signed = wallet.signMessage(msgForSigning)
// console.log('signed', signed)

        /* Initialize superagent request. */
        const request = require('superagent')

let endpoint = 'https://api.taboou.com/v1/posts'
let auth = `TABOO-TOKEN Signature=${signed}, Nonce=${nonce}`

        /* Add the current district manager to the request. */
        _post.dm = districts[this.activeDistrict].manager

        /* Upload base64 data to imgur (anonymously). */
        request
            .post(endpoint)
            .send(_post)
            .set('Authorization', auth)
            .set('accept', 'json')
            .end((err, res) => {
                if (err) console.error(err)

// console.log('res.body', res.body)
                if (res.body && res.body.errorMsg) {
                    /* Retrieve the error message. */
                    const errorMsg = res.body.errorMsg

                    /* Update the error message. */
                    this.errorMsg = errorMsg

                    /* Alert the user of the error. */
                    $('#modalRateLimit').modal()
                } else {
                    /* Retrieve the active district url. */
                    const target = `#/district/${this.activeDistrict}`

                    /* Redirect to district page. */
                    document.location = target
                }
            })
	}

    signIn            = require('./store/signIn').default
    agreeToDisclaimer = require('./store/agreeToDisclaimer').default
    denyDisclaimer    = require('./store/denyDisclaimer').default
    hashDataUrl       = require('./store/hashDataUrl').default

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
    set networkId(_networkId) {
    	this.eth.networkId = _networkId
    }

    /**
     * Update Accounts
     *
     * @notify Updates the active list of blockchain accounts.
     * @param accounts An array of active accounts.
     */
    set accounts(_accounts) {
    	this.eth.accounts = _accounts
    }

    /**
     * Update Active Account Balance
     *
     * @notify Updates the balance from the active account.
     * @param balance Account value (in wei).
     */
    set balance(_balance) {
    	this.eth.balance = _balance
    }

}

const store = window.store = new TabooStore

export default store
