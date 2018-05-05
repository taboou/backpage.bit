import React from 'react'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
		const post_ad = 'post ad'
		const choose_a_location = 'Choose a location'

        return (
	      	<div id="header">
	          	{
	          		/*<h1>backpage0.bit</h1>*/
	          		// FIXME: Cannot use webpack loader to load this in css
	          	}
	          	<img src="../images/logo0bit.png" />
	      
	          	<div id="postAnAd" class="link">
                    <div><NavLink to="/">home</NavLink></div>
                    <div><NavLink to="/post">{ post_ad }</NavLink></div>
                    <div><NavLink to="/help">help</NavLink></div>
	          	</div>
	      
	          	<div>{ choose_a_location }:</div>
	      	</div>
        )
    }
}
