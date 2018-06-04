import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class Status extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <h5>
                Status &amp; Diagnostic Center
            </h5>

            <div class="row">
                <div class="col-7 text-right">
                    Your Device Width
                </div>
                <div class="col-5">
                    { this.store.device.width }
                </div>
            </div>

            <div class="row">
                <div class="col-7 text-right">
                    Your Device Height
                </div>
                <div class="col-5">
                    { this.store.device.height }
                </div>
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {
}
