import React from 'react'

import { observer } from 'mobx-react'

import { Redirect } from 'react-router-dom'

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
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            redirect: null
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={ this.state.redirect } />
        }
        /* Retrieve the device width. */
        const deviceWidth = this.store.device.width

        return <div style={ styles.home } id="home" class="">
            <div style={ styles.home_mainWrapper } id="mainWrapper">
                <div style={ styles.home_geoListings } id="geoListings">
                    <div style={ styles.home_column }>
                        <US_Directory deviceWidth={ deviceWidth } />
                    </div>

                    <div style={ styles.home_column }>
                        <CA_Directory deviceWidth={ deviceWidth } />
                        <EU_Directory deviceWidth={ deviceWidth } />
                        <Asia_Directory deviceWidth={ deviceWidth } />
                        <AU_Oceania_Directory deviceWidth={ deviceWidth } />
                        <Latin_America_Caribbean_Directory deviceWidth={ deviceWidth } />
                        <Africa_Directory deviceWidth={ deviceWidth } />
                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)

        this._handleRedirection()
    }

    _handleRedirection() {
        /* Retrieve the query string. */
        let qs = window.location.href.slice(window.location.href.indexOf('?') + 1)
        console.log('qs', qs)

        /* Retrieve the action. */
        if (qs.indexOf('&') > 0) {
            let action = qs.split('&')[0]
            console.log('action', action)

            /* Initialize endpoint. */
            const endpoint = action.slice(0, action.indexOf('-'))
            console.log('endpoint', endpoint)

            /* Initialize param. */
            const param = action.slice(action.indexOf('-') + 1)
            console.log('param', param)

            /* Initialize redirect. */
            const redirect = `/${endpoint}/${param}`
            console.log('redirect', redirect)

            /* Update state. */
            this.setState({ redirect })
        }
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
