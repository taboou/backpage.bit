import React from 'react'

import {
	US_Directory,
	CA_Directory,
	EU_Directory
} from './Directories'

// import fs from 'fs'

export default class App extends React.Component {
    render() {
		const post_ad = 'post ad'
		const choose_a_location = 'Choose a location'

		const region = 'region'
		const city = 'city'

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

        return (
		    <div id="mainWrapper">
		      	<div id="header">
		          	<h1>backpage0.bit</h1>
		      
		          	<div id="postAnAd" class="link">{ post_ad }</div>
		      
		          	<div>{ choose_a_location }:</div>
		      	</div>

		        <div id="geoListings">
		          	<div class="column">
		                <US_Directory />
		          	</div>

		          	<div class="column">
		                <CA_Directory />
		                <EU_Directory />

		        
		            
		        <div class="asia,-pacific,-and-middle-east geoBlock">
		                  <h2>Asia, Pacific, and Middle East</h2>
		                  <div class="inner">
		                  <div v-for="region in asia_mideast_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>
		            
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
		    
		    	<div id="footer">
		          	<div>
		            	Place free classified ads with video.
		          	</div>
		      
		          	<ul id="navLinkList">
		              	<li><a href="javascript://">My Account</a></li>
		              	<li><a href="javascript://">Buy Credits</a></li>
		            	<li><a href="javascript://">Contact</a></li>
		            	<li><a href="javascript://">Help</a></li>
		            	<li><a href="javascript://">Privacy</a></li>
		            	<li><a href="javascript://">Terms</a></li>
		            	<li>&copy; 2018 backpage0.bit</li>
		          	</ul>
		      
		          	<br/><br/>
		      	</div>
		    </div>
        )
    }
}
