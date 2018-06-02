import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

@observer
export default class Footer extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
			<div id="container" style={ styles.container }>
	          	<div style={ styles.tagline }>
	            	Place free classified ads to the <em><u>blockchain</u></em>.
	          	</div>

	          	<ul style={ styles.navLinkList }>
	              	<li style={ styles.navLinkList_li }><NavLink to="/account">My Account</NavLink></li>
	              	<li style={ styles.navLinkList_li }><NavLink to="/coins">Buy Coins</NavLink></li>
	            	<li style={ styles.navLinkList_li }><NavLink to="/help">Help</NavLink></li>
	            	<li style={ styles.navLinkList_li }><NavLink to="/privacy">Privacy</NavLink></li>
	            	<li style={ styles.navLinkList_li_last }><NavLink to="/terms">Terms</NavLink></li>
	          	</ul>

                <div class="row">
                    <div class="col text-center" style={ styles.copyright }>
                        &copy; 2018 Backpage0.bit
                    </div>
                </div>
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
  	},
    navLinkList: {
        margin: '1em 0',
        padding: 0,
        fontSize: '0.8em',
        textAlign: 'center',
        listStyleType: 'none'
    },
    navLinkList_li: {
        margin: 0,
        padding: '0 0.5em',
        display: 'inline',
        borderRight: '1px solid #000'
    },
    navLinkList_li_last: {
        margin: 0,
        padding: '0 0.5em',
        display: 'inline',
    },
    copyright: {
        margin: 0,
        fontSize: '0.8em',
        padding: '0 0.5em',
        display: 'inline',
        textAlign: 'center'
    }
}
