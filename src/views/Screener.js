import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

@observer
export default class Screener extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            currentDisplay: null
        }
    }

    render() {
        return <div class="container-fluid">
            <h2>Screener</h2>

            { this._manageDisplay() }

            <div class="alert alert-danger mt-3" role="alert">
                <h5 class="alert-heading text-center">
                    !!! YOU <u>MUST</u> READ THIS !!!
                </h5>

                <small style={ styles.disclaimer }>
                    Use of this screening service is <strong>100% AT YOUR OWN RISK!</strong>
                    &nbsp;Backpage Zero, MDAO makes <strong>NO GUARANTEES</strong> as to the accuracy of the information shown above.
                    &nbsp;All reports are generated from <strong><u>user-submitted</u></strong> data made <strong><u>publically available</u></strong> on the blockchain.

                    <div class="text-center mt-3">
                        <strong>
                            ALWAYS PROTECT YOURSELF WITH<br/>
                            REASONABLE &amp; SOUND JUDGEMENT<br/>
                            <FontAwesome name="heart" />&nbsp;&nbsp;
                            <FontAwesome name="heart" />&nbsp;&nbsp;
                            <FontAwesome name="heart" />
                        </strong>
                    </div>
                </small>
            </div>
        </div>
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)
    }

    _manageDisplay() {
        if (!this.state.currentDisplay)
            return this._welcome()

        if (this.state.currentDisplay == 'sw')
            return this._forSexWorkers()

        if (this.state.currentDisplay == 'cust')
            return this._forCustomers()
    }

    _welcome() {
        return <div>
            <p class="lead text-center">
                We treat your <FontAwesome name="shield" /> very seriously.
                &nbsp;Take a few moments to <FontAwesome name="search" /> our lists for any crazy <FontAwesome name="user-secret" /> and put your mind at ease.
            </p>

            <div class="row">
                <div class="col-6">
                    <button class="btn btn-block btn-lg btn-info"
                        onClick={ () => this.setState({ currentDisplay: 'sw' }) }>
                        I'M A SEX<br/>WORKER
                    </button>
                </div>

                <div class="col-6">
                    <button class="btn btn-block btn-lg btn-outline-info"
                        onClick={ () => this.setState({ currentDisplay: 'cust' }) }>
                        I'M A<br/>CUSTOMER
                    </button>
                </div>
            </div>
        </div>
    }

    _forSexWorkers() {
        return <div>
            It depends on the prostitute and the prostitution culture of a given place.

            Some screen only to the extent that they know the customer has the cash to pay for the services.

            Others work only by word-of-mouth references from previous clients.

            Some use prostitute-oriented websites that offer warnings about problem customers.

            Others work for agencies that do the pre-screening.
        </div>
    }

    _forCustomers() {
        return <div>
            If you're worried about your first time with a provider or have questions about a specific provider in particular, we are here to offer you some helpful advice.
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {
    disclaimer: {
        // fontSize: '0.6em',
        // lineHeight: '4px'
    }
}
