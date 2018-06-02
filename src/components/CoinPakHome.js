import React from 'react'

export default class CoinPakHome extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <div class="card-deck text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">DIME PAK</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $10
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.props.dimePakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>10 TABOO</span> Gold Coins</li>
                            <li><small class="text-muted">BONUS: up to 1 MILLION Gas <small>(gWei)</small></small></li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button disabled type="button" id="dimeOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Place An Order
                        </button>
                    </div>
                </div>

                <div class="card mb-4 box-shadow">
                    <div class="card-header bg-info text-white">
                        <h4 class="my-0 font-weight-normal">HUNDO PAK</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $85
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.props.hundoPakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>100 TABOO</span> Gold Coins</li>
                            <li>Save 15% ($0.85 / coin)</li>
                            <li><small class="text-muted">BONUS: up to 5 MILLION Gas <small>(gWei)</small></small></li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button disabled type="button" id="hundoOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Place An Order
                        </button>
                    </div>
                </div>

                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">KILO PAK</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $750
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.props.kiloPakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>1,000 TABOO</span> Gold Coins</li>
                            <li>Save 25% ($0.75 / coin)</li>
                            <li><small class="text-muted">BONUS: up to 25 MILLION Gas <small>(gWei)</small></small></li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button disabled type="button" id="kiloOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Place An Order
                        </button>
                    </div>
                </div>

                <div class="card mb-4 box-shadow">
                    <div class="card-header bg-warning text-white">
                        <h4 class="my-0 font-weight-normal">FREE GOLD!</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">
                            $85
                            <small class="text-muted" style={ styles.perCoinPrice }>
                                &nbsp;{ this.props.hundoPakBtcVal } BTC
                            </small>
                        </h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li><span style={ styles.featuredTxt }>100 TABOO</span> Gold Coins</li>
                            <li>Save 15% ($0.85 / coin)</li>
                            <li><small class="text-muted">BONUS: up to 5 MILLION Gas <small>(gWei)</small></small></li>
                        </ul>
                    </div>

                    <div class="card-footer">
                        <button disabled type="button" id="hundoOrder" class="btn btn-lg btn-block btn-outline-primary">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col text-center">
                    <em>Please contact <a href="mailto:support@taboou.com">support@taboou.com</a> for assistance with larger value and/or non-Bitcoin (BTC) orders.</em>
                </div>
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
