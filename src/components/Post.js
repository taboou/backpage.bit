import React from 'react'

import moment from 'moment'

export default class Post extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Retrieve post data from props. */
        this.post = this.props.post
    }

    render() {
        const expiration = moment(this.post.e).fromNow()

        return <div class="col-lg-4 col-sm-6 col-12" style={ styles.bottomBuffer }>
            <div class="card">
                <img class="card-img-top" src={ this.post.ic } alt={ this.post.t } />

                <div class="card-body">
                    <h5 class="card-title">{ this.post.t }</h5>

                    <p class="card-text">
                        { this.post.b }
                    </p>

                    <p class="card-text text-right">
                        <small>expires { expiration }</small>
                    </p>

                    <a href="javascript://" class="btn btn-primary">open details</a>
                </div>
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {
    card: {
        // width: '18rem'
    },
    bottomBuffer: {
        marginBottom: '10px'
    }
}
