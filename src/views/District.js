import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

@observer
export default class District extends React.Component {
    constructor(props) {
        super(props)
// console.log('props', props);
        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        // console.log('what are the props in District.js', this.props)
        return (
            <div class="container-fluid">
                <h2>{ this.getDistrictId() }</h2>

                <p>
                    Where would you like to go?<br />
                    <NavLink to="/">Take Me Home</NavLink>
                </p>
            </div>
        )
    }

    componentDidMount() {
console.log('District.js has been mounted');
        const ids = '0x163797e63d9a09259104c0011bfdfc22f829a26f7bf91e70835464a4e8310513'
        this.store.loadPosts(ids)
    }

    /**
     * Get Post Id
     *
     * @notice A helper function to parse out the post id from the url.
     *
     * @dev TODO Handle this using ReactJs native router function.
     */
    getDistrictId() {
        /* Retrieve the current url. */
        const currentUrl = window.location.href

        /* Retrieve the postid as the last argument of the url. */
        const postId = currentUrl.split('/').pop()

        return postId
    }
}
