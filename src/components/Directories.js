import React from 'react'

import { NavLink } from 'react-router-dom'

import locations from '../data/locations.js'

const post_ad = 'post ad'
const choose_a_location = 'Choose a location'

const region = 'region'
const city = 'city'

export class US_Directory extends React.Component {
    render() {
        return (
            <div class="united-states geoBlock">
                <h2 style={ styles.h2_unitedStates }>United States</h2>
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

export class Asia_Directory extends React.Component {
    render() {
        return (
			<div class="asia,-pacific,-and-middle-east geoBlock">
				<h2>Asia, Pacific, and Middle East</h2>
				<div class="inner">
					<div v-for="region in asia_mideast_regions" class="geoUnit">
						<h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
						<ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
					</div>
				</div>
			</div>
        )
    }
}

export class AU_Oceania_Directory extends React.Component {
    render() {
        return (
            <div class="australia-and-oceania geoBlock">
                <h2>Australia and Oceania</h2>
                <div class="inner">
                    <div v-for="region in au_oceania_regions" class="geoUnit">
                        <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
                        <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
                    </div>
                </div>
            </div>
        )
    }
}

export class Latin_America_Caribbean_Directory extends React.Component {
    render() {
        return (
            <div class="latin-america-and-caribbean geoBlock">
                <h2>Latin America and Caribbean</h2>
                <div class="inner">
                    <div v-for="region in latin_caribbean_regions" class="geoUnit">
                        <h3><a href="javascript:loadRegion(region)">{ region }</a></h3>
                        <ul><li v-for="city in cities[region]" class="active"><a href="javascript:loadCity('{ city }')">{ city }</a></li></ul>
                    </div>
                </div>
            </div>
        )
    }
}

export class Africa_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Africa</h2>
            <div style={ styles.geoBlock_inner }>
                { locations.african_regions.map((region, index) => {
                    return <Region key={ index } region={ region }/>
                }) }
            </div>
        </div>
    }
}

class Region extends React.Component {
    constructor(props) {
        super(props)

        /* Assign locations from props. */
        this.region = props.region
    }

    render() {
        return <div style={ styles.geoBlock_geoUnit }>
            <h3 style={ styles.home_h3 }><NavLink style={ styles.h3_navLink } to={ "/district/africa-" + this.region.replace(/ /g, '-').toLowerCase() }>{ this.region }</NavLink></h3>
            <ul style={ styles.home_ul }>
                { locations.districts[this.region].map((district, index) => {
                    return <District key={ index } district={ district } />
                }) }
            </ul>
        </div>
    }
}

class District extends React.Component {
    constructor(props) {
        super(props)

        /* Assign district from props. */
        this.district = props.district
    }

    render() {
        return <li style={ styles.home_li } class="active">
            <NavLink style={ styles.navLink } to={ "/district/" + this.district.id }>
                { this.district.name }
            </NavLink>
        </li>
    }
}

/* Initialize stylesheet. */
const styles = {
    /* home */
    home_h1: {
        height: '40px',
        margin: '0 0 0.5em',
        padding: '0',
        textIndent: '-9999px'
    },
    home_h2: {
        margin: '0',
        fontSize: '24px'
    },
    home_h3: {
        margin: '0',
        fontSize: '16px'
    },
    home_sup: {
        lineHeight: '1',
        verticalAlign: 'baseline'
    },
    home_ul: {
        margin: '0',
        padding: '0'
    },
    home_li: {
        paddingLeft: '0.5em'
    },

    /* geoBlock */
    geoBlock: {
        padding: '2px 7px'
    },
    geoBlock_h2: {
        backgroundColor: '#405E8F',
        color: '#fff',

        maxWidth: '100%',
        marginTop: '8px',
        marginBottom: '8px',
        padding: '4px',
        WebkitBorderRadius: '3px',
        MozBorderRadius: '3px',
        borderRadius: '3px'
    },
    geoBlock_inner: {
        WebkitColumnCount: 3,
        MozColumnCount: 3,
        columnCount: 3,
        overflow: 'hidden'
    },
    geoBlock_geoUnit: {
        minWidth: '100%',

        overflow: 'hidden',
        marginBottom: '0.75em',
        maxWidth: '150px',

        // webkitColumnBreakInside: avoid,
        // mozColumnBreakInside: avoid,
        // oColumnBreakInside: avoid,
        // msColumnBreakInside: avoid,
        // columnBreakInside: avoid,
        // pageBreakInside: avoid
    },

    h2_unitedStates: {
        display: 'block'
    },
    navLink: {
        color: '#b59a28'
    },
    h3_navLink: {
        color: '#000',
        textDecoration: 'none'
    }
}
