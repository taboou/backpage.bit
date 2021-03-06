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
console.log('Post', this.post.id, this.post.t)

        return <div class="card">
            <img class="card-img-top" src={ this.post.ic } alt={ this.post.t } />

            <div class="card-body">
                <h5 class="card-title">{ this.post.t }</h5>

                <p class="card-text">
                    { this._displayBody(this.post.b) }
                </p>

                <p class="card-text text-right">
                    <small>expires { expiration }</small>
                </p>

                <button class="btn btn-lg btn-info btn-block" onClick={ this._loadPost.bind(this) }>
                    open details
                </button>
            </div>
        </div>
    }

    _displayBody(body) {
        if (body.length > 500)
            /* Return the first 500 characters of the body. */
            return body.slice(0, 500) + ' ...'
        else
            return body
    }

    _loadPost () {
        /* Update the store title. */
        this.store.postTitle = this.post.t

        /* Update the store body. */
        this.store.postBody = this.post.b

        /* Test for iFrame, as when using a ZeroNet proxy. */
        // BUG Test for iOS device within an iFrame and scroll to top.
        if (window !== window.top) {
            /* Test for iOS device. */
            const isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(
                navigator.platform)

            if (isIOS) {
                /* Jump to the top of the page. */
                // window.scrollTo(0, 0)
                parent.self.scrollTo(0, 0)
                // $('html, body', parent.document)
                //     .animate({
                //         scrollTop: $("body").offset().top
                //     }, 250, "easeOutQuart")
            }
        }

        /* Open the modal window. */
        $('#postDetails').modal()
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
