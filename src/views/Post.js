import React from 'react'
 
import { observer } from 'mobx-react'

@observer
export default class Post extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
console.log('what are the props in Post.js', this.props)
        return (
            <div class="container-fluid">
                <h2>Post #</h2>
                
                <p>
                    What goes here?
                </p>
            </div>
        )
    }
}
