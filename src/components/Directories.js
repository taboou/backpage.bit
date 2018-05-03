import React from 'react'

const post_ad = 'post ad'
const choose_a_location = 'Choose a location'

const region = 'region'
const city = 'city'

export class US_Directory extends React.Component {
    render() {
        return (
            <div class="united-states geoBlock">
                <h2 id="unitedStates">United States</h2>
                <div class="inner">
	                <div v-for="region in us_regions" class="geoUnit">
	                    <h3><a href="javascript:loadRegion('{ region }')">{ region }</a></h3>
	                    <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
	                </div>
	            </div>
	        </div>
        )
    }
}

export class CA_Directory extends React.Component {
    render() {
        return (
			<div class="canada geoBlock">
				<h2 id="canada">Canada</h2>
				<div class="inner">
					<div v-for="region in ca_regions" class="geoUnit">
						<h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
						<ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
					</div>
				</div>
			</div>
        )
    }
}

export class EU_Directory extends React.Component {
    render() {
        return (
			<div class="europe geoBlock">
				<h2>Europe</h2>
				<div class="inner">
					<div v-for="region in eu_regions" class="geoUnit">
						<h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
						<ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
					</div>
				</div>
			</div>
        )
    }
}
