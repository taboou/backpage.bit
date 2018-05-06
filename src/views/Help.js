import React from 'react'
 
import { observer } from 'mobx-react'

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

        return (
            <div class="container-fluid">
                <h2>How can we help you?</h2>

                <hr />

                <div class="row">
                    <div class="col-4 text-right">
                        Contact us @
                    </div>
                    <div class="col">
                        <div class="row">
                            <a href="mailto:support@taboou.com">support@taboou.com</a>
                        </div>
                        <div class="row">
                            twitter.com/taboou
                        </div>
                    </div>
                </div>

                <hr />

                <div class="row">
                    <div class="col text-right">
                        Last (Ethereum) Block #
                    </div>
                    <div class="col">
                        <strong>{ lastBlockNum }</strong>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        /* Load the accont info from the blockchain. */
        // this.loadNetworkStatus()
    }

}
