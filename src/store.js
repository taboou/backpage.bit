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

    /* Initialize the deposit account (used for buying coins). */
    @observable depositAccount = ''

    /* Initialize gold balance. */
    @observable gold = 0

	// @observable posts = ['come by tonight', 'new provider']
    // @observable postTitle = 'Sample Title'
    // @observable postBody = 'sample post body'
	@observable searchFilter = ''
	@observable errorMsg = ''

    /* Tracks the location of any post-authorizaton redirects. */
	@observable authRedirect = ''

	@observable eth = {
		lastBlockNum : 'loading...',
		network      : 'ropsten',
		provider     : 'https://ropsten.infura.io/',	// mainnet.infura.io
		networkId    : null,
		accounts     : [null],        // NOTE: static page render problem w/out `[null]`
		balance      : null
	}

    @observable btc = {
        lastBlockNum : 'loading...',
		accounts     : [null],        // NOTE: static page render problem w/out `[null]`
		balance      : null
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

	@computed get weiBalance() {
		/* Retrieve the balance. */
		let balance = this.eth.balance

		return balance
	}

	@computed get ethBalance() {
        /* Validate ether balance. */
        if (!this.eth.balance)
            return null

		/* Retrieve the balance. */
		let balance = this.eth.balance

		/* Convert balance to Wei. */
		balance = this.ethers.utils.formatEther(balance)

		/* Format to 6 decimals. */
		balance = parseFloat(balance).toFixed(6)

		return parseFloat(balance)
	}

	@computed get goldBalance() {
        /* Validate gold balance. */
        if (!this.gold)
            return null

        return parseFloat((this.gold / 1000000).toFixed(2))
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

    /* Account address formatted for display purposes. */
    get addressDisplay() {
        /* Import the component. */
        const _component = require('./store/addressDisplay').default

        /* Assign context then return the "executed" component. */
        return _component.bind(this)()
    }

    /* Shorter account address formatted for display purposes. */
    get addressShortDisplay() {
        /* Import the component. */
        const _component = require('./store/addressShortDisplay').default

        /* Assign context then return the "executed" component. */
        return _component.bind(this)()
    }

    /* Determines the loaded district based on the browser's url. */
    get loadedDistrict() {
        /* Import the component. */
        const _component = require('./store/loadedDistrict').default

        /* Assign context then return the "executed" component. */
        return _component.bind(this)()
    }

    /* District manager ABI. */
    get districtManagerAbi() {
        return require('./store/abiDistrictManager').default
    }

    get goldMineAbi() {
        return require('./store/abiGoldMine').default
    }

    get tabooGoldAbi() {
        return require('./store/abiTabooGold').default
    }

    set addPost(_post) {
        /* Import the component. */
        const _addPost = require('./store/addPost').default

        /* Retrieve the district manager. */
        const districtManager = districts[this.activeDistrict].manager

        /* Add the current district manager to the request. */
        _post.dm = districtManager

        /* Return the component. */
        return _addPost.bind(this)(_post)
	}

    signIn            = require('./store/signIn').default
    agreeToDisclaimer = require('./store/agreeToDisclaimer').default
    denyDisclaimer    = require('./store/denyDisclaimer').default
    hashDataUrl       = require('./store/hashDataUrl').default

    async loadGoldBalance() {
        /* Localize this. */
        const self = this

        /* Initialize Taboo Gold address. */
        const account = '0x2B758418542D30B0B16247c5D96df9b5864C86EA'

        /* Initialize provider. */
        const provider = this.ethers.providers.getDefaultProvider('ropsten')

        /* Initialize contract. */
        const contract = new this.ethers.Contract(
            account, this.tabooGoldAbi, provider)

        /* Retrieve current account address. */
        const address = this.eth.accounts[0].address

        console.log('Contract loaded', address, contract)

        var callPromise = contract.balanceOf(address)
            .then(function (balance) {
                console.log('balance', balance.toString())

                /* Update the gold balance. */
                self.gold = balance.toNumber()
            })
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

/* Create a new store. */
const store = window.store = new TabooStore

/* Export the default store. */
export default store
