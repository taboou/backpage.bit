import React from 'react'

import { NavLink } from 'react-router-dom'

import districts from '../data/districts'
import locations from '../data/locations'

export class US_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.unitedStates_h2 }>United States</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.us_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
                }) }
            </div>
        </div>
    }
}

export class CA_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Canada</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.ca_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
                }) }
            </div>
        </div>
    }
}

export class EU_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Europe</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.eu_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
                }) }
            </div>
        </div>
    }
}

export class Asia_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Asia, Pacific, &amp; Middle East</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.asia_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
                }) }
            </div>
        </div>
    }
}

export class AU_Oceania_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Australia &amp; Oceania</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.oceania_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
                }) }
            </div>
        </div>
    }
}

export class Latin_America_Caribbean_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Latin America &amp; Caribbean</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.latin_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
                }) }
            </div>
        </div>
    }
}

export class Africa_Directory extends React.Component {
    render() {
        return <div style={ styles.geoBlock }>
            <h2 style={ styles.geoBlock_h2 }>Africa</h2>
            <div style={ (this.props.deviceWidth <= 480) ? styles.geoBlock_inner_480 : styles.geoBlock_inner }>
                { locations.african_regions.map((region, index) => {
                    return <Region key={ index } region={ region } />
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
            <h3 style={ styles.home_h3 }>
                <NavLink style={ styles.h3_navLink } to={ "/district/africa-" + this.region.replace(/ /g, '-').toLowerCase() }>
                    { this.region }
                </NavLink>
            </h3>

            <ul style={ styles.home_ul }>
                { locations.districts[this.region].map((district, index) => {
                    /* Retrieve only active districts. */
                    if (district.id && districts[district.id])
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
                <button type="button" class="btn btn-sm btn-primary text-truncate" style={ styles.navLinkText }>
                    { this.district.name }
                </button>
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
        fontSize: '1.1em'
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
        // paddingLeft: '0.5em',
        marginTop: '5px'
    },

    /* geoBlock */
    geoBlock: {
        padding: '2px 7px'
    },
    geoBlock_h2: {
        backgroundColor: '#405E8F',
        color: '#fff',
        fontSize: '1.8em',

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
        // overflow: 'hidden'
    },
    geoBlock_inner_310: {
        WebkitColumnCount: 'auto',
        MozColumnCount: 'auto',
        ColumnCount: 'auto'
    },
    geoBlock_inner_480: {
        // display: 'none', /* hide geoblock ontent by default click to open */
        WebkitColumnCount: 2,
        MozColumnCount: 2,
        ColumnCount: 2,
        padding: '8px 4px'
    },
    geoBlock_geoUnit: {
        minWidth: '100%',

        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        marginBottom: '0.75em',
        maxWidth: '150px',

        // webkitColumnBreakInside: avoid,
        // mozColumnBreakInside: avoid,
        // oColumnBreakInside: avoid,
        // msColumnBreakInside: avoid,
        // columnBreakInside: avoid,
        // pageBreakInside: avoid
    },

    unitedStates_h2: {
        display: 'block',

        backgroundColor: '#405E8F',
        color: '#fff',
        fontSize: '1.8em',

        maxWidth: '100%',
        marginTop: '8px',
        marginBottom: '8px',
        padding: '4px',
        WebkitBorderRadius: '3px',
        MozBorderRadius: '3px',
        borderRadius: '3px'
    },
    navLink: {
        color: '#b59a28'
    },
    navLinkText: {
        fontSize: '0.7em'
    },
    h3_navLink: {
        color: 'rgba(30, 30, 210, 0.7)',
        textDecoration: 'none',
        // textOverflow: 'ellipsis'
    }
}
