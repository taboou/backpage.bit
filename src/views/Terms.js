import React from 'react'

import { observer } from 'mobx-react'

import { Receiver } from 'react-file-uploader'

@observer
export default class Terms extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            dataUrl : ''
        }
    }

    render() {
        return (
            <div class="container-fluid">
                <h2>Terms of use</h2>

                <p>
                    ...
                </p>

            </div>
        )
    }

    componentDidMount() {
        const self = this

    }
}
