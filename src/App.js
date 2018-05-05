import React from 'react'

import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'

import { observer } from 'mobx-react'

/* Import Bootstrap globally. */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home     from './views/Home'
import Post     from './views/Post'
import Help     from './views/Help'

@observer
export default class App extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Header now="So far I LIKE today!" />

                    <div class="container">
                        <Route 
                            exact path = "/"
                            component  = { () => (<Home store={ this.store } />) }/>
                        
                        <Route
                            path      = "/post"
                            component = { () => (<Post store={ this.store } />) }/>
                        
                        <Route 
                            path      = "/help"
                            component = { () => (<Help store={ this.store } />) }/>
                    </div>
                
                    <Footer />
                </div>
            </HashRouter>
        )
    }

    componentDidMount() {
        this.loadHello()
    }

    loadHello() {
        // var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546")

        var Web3 = require('web3')

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
}
