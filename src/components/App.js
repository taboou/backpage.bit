import React from 'react'

export default class App extends React.Component {
    render() {
		const post_ad = 'post ad'
		const choose_a_location = 'Choose a location'

		const region = 'region'
		const city = 'city'

        return (
		    <div id="mainWrapper">
		      <div id="header">
		          <h1>backpage0.bit</h1>
		      
		          <div id="postAnAd" class="link">{ post_ad }</div>
		      
		          <div>{ choose_a_location }:</div>
		      </div>

		        <div id="geoListings">
		          <div class="column">
		                <div class="united-states geoBlock">
		                  <h2 id="unitedStates">United States</h2>
		                  <div class="inner">
		                  <div v-for="region in us_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion('{ region }')">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>
		          </div>

		          <div class="column">
		                <div class="canada geoBlock">
		                  <h2 id="canada">Canada</h2>
		                  <div class="inner">
		                  <div v-for="region in ca_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>

		        <div class="europe geoBlock">
		                  <h2>Europe</h2>
		                  <div class="inner">
		                  <div v-for="region in eu_regions" class="geoUnit">
		                    <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
		                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
		                </div>
		                  </div>
		                </div>
		            
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
