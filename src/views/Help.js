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

        return <div class="container-fluid">
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

            <hr />

            <h5>
                Frequently Asked Questions
            </h5>

            <div class="accordion" id="faq">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-block btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Is it really FREE to post an ad?
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faq">
                        <div class="card-body">
                            <p>
                                <strong>YES!</strong>
                                &nbsp;Posting is 100% FREE, FOREVER; you only cover <a href="https://www.ethgasstation.info/" target="_blank">blockchain gas fees.</a>
                            </p>

                            <p>
                                Revenue is generated when providers use <NavLink to="/coins">Taboo Gold Coins</NavLink> to <u>Boost LIT</u> and bump up their post(s) to the top of the local district(s).
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-block btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Do I need to register to post ads?
                            </button>
                        </h5>
                    </div>

                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faq">
                        <div class="card-body">
                            <strong>NO!</strong>
                            &nbsp;At the signin/registration screen, you can leave the <u>email</u> and <u>password</u> fields empty and click 'Continue' to signin and post anonymously.
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-block btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can I request a new district added?
                            </button>
                        </h5>
                    </div>

                    <div id="collapseThree" class="collapse" aria-labelledby="headingTwo" data-parent="#faq">
                        <div class="card-body">
                            <strong>YES!</strong>
                            &nbsp;We are very happy to expand our local networks into your area.
                            &nbsp;Just send us a request and we'll get it done asap.
                        </div>
                    </div>
                </div>
            </div>

            <hr />

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

            <div class="text-right">
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
