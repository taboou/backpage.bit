import React from 'react'

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import Home from './views/Home'
import Stuff from './views/Stuff'
import Contact from './views/Contact'

import Header from './components/Header'
import Footer from './components/Footer'

import {
	US_Directory,
	CA_Directory,
	EU_Directory,
	Asia_Directory,
} from './components/Directories'

import moment from 'moment'

export default class App extends React.Component {
	constructor() {
		super()

		this.state = {
			isInitialized : false
		}
	}

    render() {
		const region = 'region'
		const city = 'city'

        return (
        	<HashRouter>
		    <div id="mainWrapper">
		    	<Header now="So far I LIKE today!" />

<ul className="header">
	<li><NavLink to="/">Home</NavLink></li>
	<li><NavLink to="/stuff">Stuff</NavLink></li>
	<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
<div className="content">
	<Route exact path="/" component={ Home }/>
    <Route path="/stuff" component={ Stuff }/>
    <Route path="/contact" component={ Contact }/>
</div>

		        <div id="geoListings">
		          	<div class="column">
		                <US_Directory />
		          	</div>

		          	<div class="column">
		                <CA_Directory />
		                <EU_Directory />
		                <Asia_Directory />

		        
		            
		        
		            
		                <div class="australia-and-oceania geoBlock">
		                  <h2>Australia and Oceania</h2>
		                  <div class="inner">
		                  <div v-for="region in au_oceania_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>

		        <div class="latin-america-and-caribbean geoBlock">
		                  <h2>Latin America and Caribbean</h2>
		                  <div class="inner">
		                  <div v-for="region in latin_caribbean_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>
		            
		        <div class="africa geoBlock">
		                  <h2>Africa</h2>
		                  <div class="inner">
		                  <div v-for="region in african_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>
		          </div>

		          <div class="clearfix"></div>
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
