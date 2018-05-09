import React from 'react'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

export default class Footer extends React.Component {
    render() {
        return (
			<div id="container" style={ styles.container }>
	          	<div style={ styles.tagline }>
	            	Place free classified ads to the blockchain.
	          	</div>
	      
	          	<ul id="navLinkList">
	              	<li><NavLink to="/account">My Account</NavLink></li>
	              	<li><NavLink to="/buy">Buy Credits</NavLink></li>
	            	<li><NavLink to="/help">Help</NavLink></li>
	            	<li><NavLink to="/privacy">Privacy</NavLink></li>
	            	<li><NavLink to="/terms">Terms</NavLink></li>
	            	<li>&copy; 2018 Backpage0.bit</li>
	          	</ul>
	      
	          	<br/><br/>
	      	</div>
        )
    }
}

/* Initialize stylesheet. */
const styles = {
  	container: {
	    marginTop  : '1em',
	    paddingTop : '1em'
  	},
  	tagline: {
	    paddingBottom : '1em',
	    fontSize      : '0.9em',
	    fontWeight    : 'bold',
	    textAlign     : 'center',

	    borderBottom : '2px solid #3563a8',
	    color        : '#3563a8'
  	}
}
