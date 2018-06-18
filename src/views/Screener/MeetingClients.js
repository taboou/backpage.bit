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
            <div class="card-header" id="headingMeetingClients">
                <h5 class="mb-0 text-center">
                    <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseMeetingClients" aria-expanded="false" aria-controls="collapseMeetingClients">
                        MEETING CLIENTS
                    </button>
                </h5>
            </div>

            <div id="collapseMeetingClients" class="collapse" aria-labelledby="headingMeetingClients" data-parent="#accordionExample">
                <div class="card-body">
                    <p>
                        Once you have screened your client and he passes.
                        &nbsp;A booking is made.
                        &nbsp;Some required a deposit upfront.
                        &nbsp;Once a time and place is agreed to, you meet up and volia, you have found your client.
                    </p>

                    <p>
                        If the client is respectful, and things go well, hopefully they’ll become a regular.
                        &nbsp;Having regular clients for any business is important.
                        &nbsp;In sex work, the more regular clients (ie clients you know you can trust), the need to take a gamble on an unknown client becomes more optional.
                    </p>
                </div>
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
