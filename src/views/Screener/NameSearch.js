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
            <div class="card-header" id="headingThree">
                <h5 class="mb-0 text-center">
                    <button class="btn btn-outline-info btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        NAME SEARCH
                    </button>
                </h5>
            </div>

            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                    Search by name
                </div>
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
