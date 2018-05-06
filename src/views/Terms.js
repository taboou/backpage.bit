import React from 'react'
 
import { observer } from 'mobx-react'

@observer
export default class Terms extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <div class="container-fluid">
                <h2>Terms of use</h2>
                
                <p>
                    What goes here?
                </p>
            </div>
        )
    }
}
