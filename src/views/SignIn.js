import React from 'react'

import { observer } from 'mobx-react'

import FontAwesome from 'react-fontawesome'

import {
    NavLink,
    Redirect
} from 'react-router-dom'

import { SignIn } from '../components'

@observer
export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Initialize a holder for the file hash. */
        this.fileHash = ''

        this.state = {
            hashAuth : false,
            authRedirect: this.store.authRedirect
        }
    }

    render() {
console.log(this.state.hasAuth, this.state.authRedirect);
        /* Check for a redirect target. */
        if (this.state.hasAuth && this.state.authRedirect)
            return <Redirect to={ this.state.authRedirect } />

        /* Check for authorization and redirect to home. */
        if (this.state.hasAuth)
            return <Redirect to={ '/' } />

        return <div class="container-fluid">
            <h2>Sign In <span class="text-muted">or</span> Register</h2>

            <div class="alert alert-warning" role="alert">
                <small>
                    <div class="text-center">
                        <strong>Welcome • 欢迎 • Bienvenido • أهلا وسهلا</strong>
                    </div>

                    <div>
                        Is this your <u>first time</u> signing in?&nbsp;
                        Just enter your email and password below and a new account will be <u>automagically</u> created for you.
                    </div>
                </small>
            </div>

            <form class="form-signin" style={ styles.formSignin }>
                <label for="inputEmail" class="sr-only">Enter your email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Enter your email address" autoFocus />

                <br />

                <label for="inputPassword" class="sr-only">Enter a strong password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Enter a strong password" />

                { /*this._advancedSecurity()*/ }
            </form>

            <div class="alert alert-danger" role="alert">
                <small>
                    <div class="text-center">
                        <h5>⚠️ BLOCKCHAIN WARNING ⚠️</h5>
                    </div>

                    <hr/>

                    <div>
                        Backpage Zero runs <strong><u>100%</u> on the <a href="https://www.bitcoin.org/" target="_blank">BTC</a> and <a href="https://www.ethereum.org/" target="_blank">ETH</a> blockchains.</strong>
                        &nbsp;By continuing, you acknowledge that your account <strong><u>CANNOT</u></strong> be recovered if you forget or lose your password.
                    </div>
                </small>
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

        /* Clear the target. */
        this.store.authRedirect = ''

        this.setState({ hasAuth: true })
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

    _advancedSecurity () {
        return <div class="form-group">
            <br /><hr />

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

            <br />

            File Preview<br/>
            <img class="img-thumbnail" id="img" width="150" height="150" />
        </div>

    }
}

/* Initialize stylesheet. */
const styles = {
    formSignin: {
        marginBottom: '20px'
    },
    warning: {
        color: '#c33'
    }
}
