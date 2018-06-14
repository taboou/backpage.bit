import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class BlogPost extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        this.state = {
            postId: null
        }
    }

    render() {
        return this._displayPost()
    }

    componentDidMount() {
        /* Retrieve the post id. */
        this._updatePostId()
    }

    _updatePostId() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the district id as the last argument of the url. */
        const postId = currentUrl.split('/').pop()

        /* Update state. */
        this.setState({ postId })
    }

    _displayPost() {
        /* Initialize post title. */
        let title = null

        /* Initialize post body. */
        let body = null

        switch(this.state.postId) {
            case 'golden-pen':
                title = 'Golden Pen'
                body = 'Do you hate dealing with sweaty, needy, selfish clients all the time? Earn Gold writing for Backpage Zero (up to $1.00 per word).'
                break
            default:
                title = 'Unknown'
                body = ''
        }

        return <div class="container-fluid">
            <h2>{ title }</h2>

            <div>
                { body }
            </div>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
