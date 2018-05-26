import React from 'react'

import FontAwesome from 'react-fontawesome'

import { Redirect } from 'react-router-dom'

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize a holder for the file hash. */
        this.fileHash = ''

        this.state = {
            hashAuth : false
        }
    }

    render() {
        if (this.state.hasAuth && this.store.activeDistrict)
            return <Redirect to={ '/new-post' } />
            // return <Redirect to={ '/district/' + this.store.activeDistrict } />
        else if (this.state.hasAuth)
            return <Redirect to={ '/' } />

        return <div class="container-fluid">
            <h2>Sign In</h2>

            <form class="form-signin">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus />

                <br />

                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />

                <br />

                <div class="form-group">
                    <label for="exampleInputFile" class="bmd-label-floating">
                        <strong>Advanced Security (optional)</strong>

                        <div class="col-10"><small class="text-muted">
                            Are you looking for extra security?
                            Choose a <strong>"random" and "unique" file</strong> from your device.
                            This file will NEVER be sent to our server.
                            <strong>But...</strong>
                        </small></div>

                        <div class="col-10"><small class="text-muted">
                            <strong style={ styles.warning }>
                                WARNING!!!
                                Any loss <em>(deletion, corruption, etc)</em> of this security file WILL result in <u>PERMANENT</u> loss of access to your account, including ALL funds and saved data.
                                <u>WE CANNOT HELP YOU!</u>
                            </strong>
                        </small></div>
                    </label>
                    <input type="file" class="form-control-file" id="imageCover" onChange={ this.readFile.bind(this) } />
                    <small class="text-muted">
                        Supported file types include <em>(txt, jpg, mp4, pdf and more)</em>
                    </small>
                </div>

                <br />

                File Preview<br/>
                <img class="img-thumbnail" id="img" width="150" height="150" />
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
    }

    /* User agrees to the disclaimer. */
    signIn() {
        this.store.signIn(
            document.getElementById('inputEmail').value,
            document.getElementById('inputPassword').value,
            this.fileHash)

        this.setState({ hasAuth : true })
    }

    /* User denies to the disclaimer. */
    cancel() {
        this.store.denyDisclaimer()
    }

    readFile(el) {
        /* Verify file array exists. */
        if (el && el.target && el.target.files[0]) {
            /* Initialize file reader. */
            const FR = new FileReader()

            /* Initialize new event listener. */
            FR.addEventListener('load', (e) => {
                /* Retrieve the data result. */
                const dataUrl = e.target.result
console.log('dataUrl', dataUrl)

                /* Load the image preview. */
                document.getElementById('img').src = dataUrl

                /* Hash the binary data. */
                const hashedData = this.store.hashDataUrl(dataUrl)
console.log('hashedData', hashedData)

                /* Update the file hash. */
                this.fileHash = hashedData
            })

            /* Read the image data. */
            FR.readAsDataURL( el.target.files[0] )
        }

    }
}

/* Initialize stylesheet. */
const styles = {
    warning: {
        color: '#c33'
    }
}
