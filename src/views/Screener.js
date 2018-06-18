import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import {
    Bootstrap,
    Heading
} from '../components'

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
            <Heading title={ 'Screener' } />

            { this._manageDisplay() }

            <hr />

            <div class="alert alert-danger mt-4" role="alert">
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

        if (this.state.currentDisplay == 'hobby')
            return this._forHobbyists()
    }

    _welcome() {
        return <div>
            <p class="lead text-center">
                Here at BPZ, we take your <FontAwesome name="medkit" /> and <FontAwesome name="shield" /> very seriously.
                &nbsp;Whether you're a <FontAwesome name="venus" /> or <FontAwesome name="mars" />, always <FontAwesome name="search" /> our lists before booking with a <FontAwesome name="user-secret" /> to put your mind at ease.
            </p>

            <div class="row py-3">
                <div class="col-6">
                    <button class="btn btn-block btn-lg btn-outline-info"
                        onClick={ () => this.setState({ currentDisplay: 'sw' }) }>
                        I'M A SEX<br/>WORKER
                    </button>
                </div>

                <div class="col-6">
                    <button class="btn btn-block btn-lg btn-outline-info"
                        onClick={ () => this.setState({ currentDisplay: 'hobby' }) }>
                        I'M A<br/>HOBBYIST
                    </button>
                </div>
            </div>
        </div>
    }

    _forSexWorkers() {
        const Intro = require('./Screener/Intro').default
        const MeetingClients = require('./Screener/MeetingClients').default
        const NameSearch = require('./Screener/NameSearch').default
        const PhoneSearch = require('./Screener/PhoneSearch').default
        const EmailSearch = require('./Screener/EmailSearch').default

        return <div>
            <div class="lead">
                Welcome Sex Worker,<br/>
                We are here to help you feel safe when going about your business.
            </div>

            <div class="accordion mt-3" id="accordionExample">
                <Intro />
                <MeetingClients />
                <NameSearch />
                <PhoneSearch />
                <EmailSearch />

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                LINKEDIN ACCOUNT
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            ...
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                FACEBOOK ACCOUNT
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            ...
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                (HOTEL) FRONT DESK
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            ...
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                TIMED CALL FROM FRIEND
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            ...
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Sex offender check
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            We'll check your details in a national sex offender registry.
                            Currently this list contains more than 43.481 offenders.
                            Should we find you listed then we'll have to decline your application.
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Blacklist check
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            Your details will be checked against a national blacklist with bad incidents filed by escorts. This might not be 100% accurate
                            but again, should we suspect a listing then we'll decline your application.
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Government check
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            We're checking your details againt a list of know agencies, addresses and names or any other suspicious data - should anything
                            appear then we'll decline your application.
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Sex offender check
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            ...
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0 text-center">
                            <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Username Search
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div class="card-body">
                            If the person has any nicknames or handles you can fill them all here.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }

    _forHobbyists() {
        return <div>
            <div class="lead">
                Welcome Friend,<br/>
                Is this your first time? 100th time? No worries, we got you covered.
            </div>

            <Bootstrap store={ this.store } />

            <div>
                <h5>What can you expect to see?</h5>

                <ol>
                    <li>Search for providers by name.</li>
                    <li>Read customer reviews and ratings.</li>
                </ol>
            </div>
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
