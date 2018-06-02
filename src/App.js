import React from 'react'

import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'

import { observer } from 'mobx-react'

/* Import Bootstrap globally. */
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home      from './views/Home'
import Coins     from './views/Coins'
import CoinsDime from './views/CoinsDime'
import District  from './views/District'
import Help      from './views/Help'
import Account   from './views/Account'
import NewPost   from './views/NewPost'
import Post      from './views/Post'
import Privacy   from './views/Privacy'
import SignIn    from './views/SignIn'
import SignOut   from './views/SignOut'
import Status    from './views/Status'
import Terms     from './views/Terms'

@observer
export default class App extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        const getConfirmation = (message, callback) => {
console.log('getConfirmation', message);
            const allowTransition = window.confirm(message)
            callback(allowTransition)
        }

        return <HashRouter getUserConfirmation={ getConfirmation }>
            <div>
                <Header store={ this.store } />

                { /* Homepage */ }
                <Route path   = "/" exact
                    component = { () => (<Home store={ this.store } />) }/>

                { /* Buy Coins */ }
                <Route path   = "/coins"
                    component = { () => (<Coins store={ this.store } />) }/>
                <Route path   = "/coins-dime"
                    component = { () => (<CoinsDime store={ this.store } />) }/>

                { /* Districts */ }
                <Route path   = "/district/:districtId"
                    component = { () => (<District store={ this.store } />) }/>

                { /* Help & Support */ }
                <Route path   = "/help"
                    component = { () => (<Help store={ this.store } />) }/>

                { /* Account Manager */ }
                <Route path   = "/account"
                    component = { () => (<Account store={ this.store } />) }/>

                { /* Posts */ }
                <Route path   = "/new-post"
                    component = { () => (<NewPost store={ this.store } />) }/>
                <Route path   = "/post/:postId"
                    component = { () => (<Post store={ this.store } />) }/>

                { /* Privacy */ }
                <Route path   = "/privacy"
                    component = { () => (<Privacy store={ this.store } />) }/>

                { /* User Authentication */ }
                <Route path   = "/signin"
                    component = { () => (<SignIn store={ this.store } />) }/>
                <Route path   = "/signout"
                    component = { () => (<SignOut store={ this.store } />) }/>

                { /* System Status */ }
                <Route path   = "/status"
                    component = { () => (<Status store={ this.store } />) }/>

                { /* Terms Of Use */ }
                <Route path   = "/terms"
                    component = { () => (<Terms store={ this.store } />) }/>

                <Footer store={ this.store } />
            </div>
        </HashRouter>
    }
}
