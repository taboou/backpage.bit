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
    }

    render() {
        return <div class="card">
            <div class="card-header" id="headingIntro">
                <h5 class="mb-0 text-center">
                    <button class="btn btn-outline-info btn-block" type="button" data-toggle="collapse" data-target="#collapseIntro" aria-expanded="true" aria-controls="collapseIntro">
                        INTRODUCTION
                    </button>
                </h5>
            </div>

            <div id="collapseIntro" class="collapse show" aria-labelledby="headingIntro" data-parent="#accordionExample">
                <div class="card-body">
                    <h5 class="text-center">
                        SCREENING 101
                    </h5>

                    <p class="lead mt-3">
                        By far, the #1 question we get from independent sex workers is, <strong>"How should I screen my clients?"</strong>
                    </p>

                    <p>
                        It depends on the prostitute and the prostitution culture of a given place.
                        Some screen only to the extent that they know the customer has the cash to pay for the services.
                        Others work only by word-of-mouth references from previous clients.
                        Some use prostitute-oriented websites that offer warnings about problem customers.
                        Others work for agencies that do the pre-screening.
                    </p>

                    <p class="lead">
                        Rule No. 1: Trust your gut instincts
                    </p>

                    <p>
                        Although I may start getting some responses, that doesn’t mean I should just take them as a client without due diligence.
                        &nbsp;Beside a person who may contact you with a true interest, you also get others who aren’t so respectful.
                        &nbsp;This may include:
                    </p>

                    <ul>
                        <li>trying to get services for free</li>
                        <li>wasting your time</li>
                        <li>not follow any policies you may have specified in your ads</li>
                        <li>and so forth...</li>
                    </ul>

                    That is why referral systems are important. They help us know who to watch out for and stay safer.
                </div>
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
