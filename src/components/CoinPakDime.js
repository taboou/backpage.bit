import React from 'react'

// https://github.com/zpao/qrcode.react
import QRCode from 'qrcode.react'

export default class CoinPakDime extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize parent. */
        this.parent = this.props.parent
    }

    render() {
        return <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h1>Dime Pak</h1>

                    <button type="button" class="btn btn-lg btn-block btn-outline-primary btnCancelOrder">
                        Cancel This Order
                    </button>

                </div>

                <div class="col-12 col-sm-6">
                    <div class="text-center" style={ styles.qrcode }>
                        <QRCode
                            size = { 256 }
                            value= { this.parent.state.depositAccount } />

                        <small>{ this.parent.state.depositAccount ? this.parent.state.depositAccount : 'loading...' }</small>
                    </div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        $('.btnCancelOrder').click(() => {
            this.parent.setState({ currentScreen : 'home' }, () => {
// TODO Make this a modal (attached to the parent)
                alert('Your order has been canceled.')
            })
        })

    }
}

/* Initialize stylesheet. */
const styles = {
    qrcode: {
        padding: 15
    }
}
