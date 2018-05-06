import React from 'react'

import FontAwesome from 'react-fontawesome'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}

    render() {
		const choose_a_location = 'Choose a location'

        return (
	      	<div id="container" style={ styles.container }>
	      		<div class="row">
		      		<div class="col-6" style={ styles.logo }>
			          	<img src="../images/logo0bit.png" />

			          	<div>{ choose_a_location }:</div>
		      		</div>
		      		<div class="col-5 text-right">
	                    <div><NavLink to="/">Home <FontAwesome name='home' /></NavLink></div>
	                    <div><NavLink to="/new-post">Post <FontAwesome name='file' /></NavLink></div>
	                    <div><NavLink to="/help">Help <FontAwesome name='question-circle' /></NavLink></div>
		      		</div>
	      		</div>
	      	</div>
        )
    }
}

/* Initialize stylesheet. */
const styles = {
  	container: {
  		// color: '#3563a8',
    	fontSize: '1.1em',
    	fontWeight: 'bold',

  		borderBottom  : '2px solid #3563a8',
  		marginBottom  : '1em',
    	paddingBottom : '0.5em',
  	},
  	logo: {
  		marginTop  : '5px',
  		marginLeft : '10px'
  	}
}
