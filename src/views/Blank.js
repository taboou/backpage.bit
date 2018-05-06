import React from 'react'
 
import { observer } from 'mobx-react'

@observer
export default class Blank extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <div class="container-fluid">
                <h2>Blank View</h2>
                
                <p>
                    What goes here?
                </p>
            </div>
        )
    }
}
