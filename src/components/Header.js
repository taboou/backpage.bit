import React from 'react'

import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

@observer
export default class Header extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        /* Retrieve the device width. */
        const deviceWidth = this.store.device.width

        return <div id="container" style={ styles.container }>
      		<div class="row">
	      		<div class="col-6 justify-content-center align-self-center" style={ styles.logo }>
		          	<img style={ this.store.device.isPhone ? styles.logoImgPhone : styles.logoImg } src="images/logo0bit.png" />
                    <div>{ this.accountLinks(deviceWidth) }</div>
	      		</div>

	      		<div class="col-5 text-right" style={ styles.navLinks }>
                    <div style={ styles.buttons }>
                        <NavLink to="/">
                            <button type="submit" class="btn btn-outline-info">
                                Home <FontAwesome name='home' />
                            </button>
                        </NavLink>
                    </div>

                    <div style={ styles.buttons }>
                        <NavLink to="/new-post">
                            <button type="submit" class="btn btn-outline-secondary">
                                Post ad <FontAwesome name='bullhorn' />
                            </button>
                        </NavLink>
                    </div>
	      		</div>
      		</div>
      	</div>
    }

    accountLinks(deviceWidth) {
        if (this.store.eth.accounts[0])
            return <div style={ (deviceWidth <= 480) ? styles.accountAddr_480 : styles.accountAddr }>
                You are signed in. [ <NavLink to="/signout">sign out</NavLink> ]<br />
                <NavLink to="/account">{ this.store.eth.accounts[0].address }</NavLink>
            </div>
        else
            return <div style={ (deviceWidth <= 480) ? styles.accountLinks_480 : styles.accountLinks }>
                [ <NavLink to="/signin">Sign in to your account</NavLink> ]
            </div>
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
  	},
    logoImg: {
        width: '265px'
    },
    logoImgPhone: {
        width: '225px'
    },
  	navLinks: {
    	fontSize: '1.2em'
  	},
    buttons: {
        marginTop: '5px'
    },
    accountAddr: {
        fontSize: '0.8em'
    },
    accountAddr_480: {
        fontSize: '0.55em'
    },
    accountLinks: {
        fontSize: '1.1em'
    },
    accountLinks_480: {
        fontSize: '0.75em'
    }
}
