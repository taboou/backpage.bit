import React from 'react'

import { observer } from 'mobx-react'

import {
    US_Directory,
    CA_Directory,
    EU_Directory,
    Asia_Directory,
    AU_Oceania_Directory,
    Latin_America_Caribbean_Directory,
    Africa_Directory
} from '../components/Directories'

@observer
export default class Home extends React.Component {
    render() {
        const region = 'region'
        const city = 'city'

        return (
            <div style={ styles.home } id="home" class="">
                <div style={ styles.home_mainWrapper } id="mainWrapper">
                    <div style={ styles.home_geoListings } id="geoListings">
                        <div style={ styles.home_column }>
                            <US_Directory />
                        </div>

                        <div style={ styles.home_column }>
                            <CA_Directory />
                            <EU_Directory />
                            <Asia_Directory />
                            <AU_Oceania_Directory />
                            <Latin_America_Caribbean_Directory />
                            <Africa_Directory />
                        </div>

                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }

    loadRegion = (regionName) => {
    	alert('loading ' + regionName + '...')
    	// document.location = 'disclaimer.html'
    }
}

/* Initialize stylesheet. */
const styles = {
    home: {
        backgroundColor: '#fff',
        fontFamily: "'trebuchet ms', verdana, arial, helvetica, helv, swiss, sans, sans-serif",
        fontSize: '14px'
    },
    home_mainWrapper: {
        width: '100%',
        maxWidth: '980px',
        margin: '0 auto 12px',
        textAlign: 'left'
    },
    home_geoListings: {
        zoom: '1',
        position: 'relative',
        clear: 'both',
        margin: '0'
    },
    home_column: {
        background: '#fff',
        width: '50%',
        float: 'left',
        boxSizing: 'border-box',
        zoom: '1',
        overflow: 'hidden',
        WebkitColumnCount: '1',
        MozColumnCount: '1',
        columnCount: '1',
        padding: '0'
    }
}
