import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import ethers from 'ethers'

import districts from '../data/districts.js'

/* Set the event topic for `TabooSocialPost(address,address,bytes32,string)`. */
const EVENT_TOPIC = '0x3aea8c937778fbbab5bd352e90c878b0c81ccc351154210756ea6d483b7cd5dc'

@observer
export default class District extends React.Component {
    constructor(props) {
        super(props)
// console.log('props', props);
        /* Localize store to class object. */
        this.store = this.props.store

        /* Localize network to class object. */
        this.network = this.store.eth.network

        /* Retrieve the district id. */
        this.districtId = this.getDistrictId()

        /* Retrive the district name. */
        this.districtName = districts[this.getDistrictId()].name

        /* Retrive the district manager. */
        this.districtManager = districts[this.getDistrictId()].manager

        this.state = {
            displayed: 'We need to show some log data from PostManager.'
        }
    }

    render() {
        return <div class="container-fluid">
            <h2>{ this.districtName }</h2>

            <strong>{ this.districtManager }</strong>

            <p>
                { this.state.displayed }
            </p>
        </div>
    }

    componentDidMount() {
        /* Localize this. */
        const self = this

        /* Initialize provider. */
        const provider = ethers.providers.getDefaultProvider(this.network)

        /* Set listener for the last XXX blocks. */
        provider.resetEventsBlock ( 3244720 )

        /* Start listeninig for events. */
        provider.on([ EVENT_TOPIC ], (log) => {
            console.log('Event Log', log)

            /* Validate district account. */
            if (log.address.toUpperCase() != this.districtManager.toUpperCase())
                return

            /* Retrieve the post data from log. */
            const encodedData = log.data
console.log('Encoded Data', encodedData)

            /* Retrieve the post data. */
            const postId = encodedData.slice(0, 66)
console.log('Post Id', postId)

            /* Decode the data. */
            const postData = ethers.utils.toUtf8String('0x' + encodedData.slice(194))
console.log('Post Data', postData)

            /* Update the state. */
            self.setState({ displayed: this.state.displayed + ' --- ' + postId + ' --- ' + postData })
        })

        const abi = [{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"districtId","type":"address"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"postId","type":"bytes32"},{"indexed":false,"name":"post","type":"string"}],"name":"TabooSocialPost","type":"event"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_post","type":"string"}],"name":"addPost","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_post","type":"string"}],"name":"addPost","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tabooDb","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"child","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"coinBalanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minBudget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minRent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"parent","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pctBudgetIncrease","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"taxRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
        const address = '0xD7cBB037dD33b0CA53aF77d7704CA886082F2AD6';
        const contract = new ethers.Contract(address, abi, provider);

        contract.ontaboosocialpost = function(districtId, owner, postId, post) {
            console.log('districtId: ', districtId)
            console.log('owner: ', owner)
            console.log('postId: ', postId)
            console.log('post: ', post)
        }
    }

    /**
     * Get Post Id
     *
     * @notice A helper function to parse out the post id from the url.
     *
     * @dev TODO Handle this using ReactJs native router function.
     */
    getDistrictId() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the postid as the last argument of the url. */
        const postId = currentUrl.split('/').pop()

        return postId
    }
}
