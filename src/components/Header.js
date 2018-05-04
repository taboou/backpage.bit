import React from 'react'

import moment from 'moment'

export default class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			now : (this.props && this.props.now) ? this.props.now : 'just getting started'
		}
	}

    render() {
		const post_ad = 'post ad'
		const choose_a_location = 'Choose a location'

		if (!this.props || !this.props.now) {
			setTimeout(() => {
				const now = moment().format()
				this.setState({ now })
			}, 2000)
		}
		
// console.log('now', now)

        return (
	      	<div id="header">
	          	{
	          		/*<h1>backpage0.bit</h1>*/
	          		// FIXME: Cannot use webpack loader to load this in css
	          	}
	          	<img src="../images/logo0bit.png" />
	      
	          	<div id="postAnAd" class="link">{ post_ad }</div>
	      
	          	<div>{ choose_a_location }:</div>
	          	<h2>{ this.state.now }</h2>
	      	</div>
        )
    }
}
