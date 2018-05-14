import React from 'react'

import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

import Disclaimer from '../components/Disclaimer'
import SignIn from '../components/SignIn'

@observer
export default class NewPost extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store


    }

    render() {
        /* Retrieve the boolean for disclaimer agreement. */
        const { hasAgreedToDisclaimer } = this.store

        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Verify agreement of disclaimer. */
        if (!hasAgreedToDisclaimer)
            return <Disclaimer store={ this.store } />

        /* Verify available accounts. */
        if (accounts[0] == null)
            return <SignIn store={ this.store } />

        return <div class="container-fluid">
            <h2>Add a new post</h2>

            <div class="row">
                <div class="col text-center">
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={ this.addPost.bind(this) }>
                    Submit New Post <FontAwesome name='thumbs-up' /></button>
                </div>
                <div class="col text-center">
                    <button type="button" class="btn btn-danger btn-lg btn-block" onClick={ this.addPost.bind(this) }>
                    Cancel <FontAwesome name='thumbs-down' /></button>
                </div>
            </div>

        </div>
    }

    /* User agrees to the disclaimer. */
    addPost() {
        const pkg = {
            title: 'First sample form post',
            body: 'Just a lil love this time.'
        }

        this.store.newPost = JSON.stringify(pkg)
    }

}
