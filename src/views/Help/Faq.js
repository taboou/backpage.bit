import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

@observer
export default class Help extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="mt-4">
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
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
