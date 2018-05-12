import React from 'react'

import FontAwesome from 'react-fontawesome'

export default class Disclaimer extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <div class="container-fluid">
                <h2>Sign In</h2>

                <form class="form-signin">
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus />

                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                </form>

                <br /><hr />

                <div class="row">
                    <div class="col">
                        <strong>By signing into this service, you understand that your password cannot be recovered in the case of loss.</strong>
                    </div>
                </div>

                <br />

                <div class="row">
                    <div class="col text-center">
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={ this.signIn.bind(this) }>
                        Continue <FontAwesome name='thumbs-up' /></button>
                    </div>
                    <div class="col text-center">
                        <button type="button" class="btn btn-danger btn-lg btn-block" onClick={ this.cancel.bind(this) }>
                        Cancel <FontAwesome name='thumbs-down' /></button>
                    </div>
                </div>
            </div>
        )
    }

    /* User agrees to the disclaimer. */
    signIn() {
        this.store.signIn(document.getElementById('inputEmail').value, document.getElementById('inputPassword').value)
    }

    /* User denies to the disclaimer. */
    cancel() {
        this.store.denyDisclaimer()
    }

}
