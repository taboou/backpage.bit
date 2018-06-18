import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import numeral from 'numeral'

@observer
export default class Help extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        /* Initailize class variables. */
        const lastBlockNum = this.store.eth.lastBlockNum

        const Faq = require('./Help/Faq').default
        const Links = require('./Help/Links').default

        return <div class="container-fluid">
            <div class="alert alert-danger text-center" role="alert">
                <h5>Are you in immediate danger?</h5>

                <a href="javascript://" class="btn btn-sm btn-outline-danger">I'm in the US</a>
                &nbsp; &bull; &nbsp;
                <a href="http://www.wlce.co.za/" target="_blank" class="btn btn-sm btn-outline-danger">Outside the US</a>

                <div class="col-10 offset-1 text-center mt-2">
                    <a href="tel:8883737888" class="btn btn-sm btn-block btn-danger">Call (888) 373-7888 for help!</a>
                </div>
            </div>

            <h5>
                Connect with us 24 hours a day on social media.
            </h5>

            <div class="row align-items-center mt-3">
                <div class="col-4 text-right">
                    Telegram
                </div>
                <div class="col">
                    <a class="btn btn-outline-primary" href="https://t.me/Backpage0" target="_blank">
                        t.me/Backpage0</a>
                </div>
            </div>

            <div class="row align-items-center mt-3">
                <div class="col-4 text-right">
                    Reddit
                </div>
                <div class="col">
                    <a class="btn btn-outline-primary" href="https://www.reddit.com/r/Backpage0/" target="_blank">
                        r/Backpage0</a>
                </div>
            </div>

            <div class="row align-items-center mt-3">
                <div class="col-4 text-right">
                    Twitter
                </div>
                <div class="col">
                    <a class="btn btn-outline-primary" href="https://twitter.com/Backpage0" target="_blank">
                        #Backpage0</a>
                </div>
            </div>

            <div class="row align-items-center mt-3">
                <div class="col-4 text-right">
                    Email
                </div>
                <div class="col">
                    <a class="btn btn-outline-primary" href="mailto:support@taboou.com">
                        support@taboou.com</a>
                </div>
            </div>

            <Faq />
            <Links />

            <h5>
                Backpage Zero runs 100% on blockchain networks.
            </h5>

            <div class="row">
                <div class="col-7 text-right">
                    Last (ETH) Block #
                </div>
                <div class="col">
                    <strong>{ numeral(lastBlockNum).format('0,0') }</strong>
                </div>
            </div>

            <hr />

            <div class="text-right mt-3">
                <NavLink to="/trade"><button class="btn btn-sm text-muted">
                    Trading Post <em>(restricted preview)</em>
                </button></NavLink>
            </div>

            <div class="text-right mt-3">
                <NavLink to="/status"><button class="btn btn-sm text-muted">
                    Status Page <em>(for support use only)</em>
                </button></NavLink>
            </div>

            <div class="text-right mt-3">
                <NavLink to="/district/dev"><button class="btn btn-sm text-muted">
                    District Dev <em>(for dev use only)</em>
                </button></NavLink>
            </div>
        </div>
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)
    }

}

/* Initialize stylesheet. */
const styles = {
}
