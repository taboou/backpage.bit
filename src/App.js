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
import Account   from './views/Account'
import BlogPost  from './views/BlogPost'
import Causes    from './views/Causes'
import Chat      from './views/Chat'
import Coins     from './views/Coins'
import CoinsDime from './views/CoinsDime'
import District  from './views/District'
import Favs      from './views/Favs'
import Help      from './views/Help'
import Messaging from './views/Messaging'
import NewPost   from './views/NewPost'
import News      from './views/News'
import NewsPost  from './views/NewsPost'
import Privacy   from './views/Privacy'
import Referral  from './views/Referral'
import Rewards   from './views/Rewards'
import Screener  from './views/Screener'
import SignIn    from './views/SignIn'
import SignOut   from './views/SignOut'
import Spot      from './views/Spot'
import Status    from './views/Status'
import Terms     from './views/Terms'
import Trade     from './views/Trade'

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

                { /* Account Features */ }
                <Route path   = "/account"
                    component = { () => (<Account store={ this.store } />) }/>
                <Route path   = "/favs"
                    component = { () => (<Favs store={ this.store } />) }/>
                <Route path   = "/spot/:account"
                    component = { () => (<Spot store={ this.store } />) }/>

                { /* Content Pages */ }
                <Route path   = "/blog/:postId"
                    component = { () => (<BlogPost store={ this.store } />) }/>
                <Route path   = "/news"
                    component = { () => (<News store={ this.store } />) }/>
                <Route path   = "/news/:postId"
                    component = { () => (<NewsPost store={ this.store } />) }/>

                { /* Buy Coins */ }
                <Route path   = "/coins"
                    component = { () => (<Coins store={ this.store } />) }/>
                <Route path   = "/coins-dime"
                    component = { () => (<CoinsDime store={ this.store } />) }/>

                { /* Posts */ }
                <Route path   = "/new-post"
                    component = { () => (<NewPost store={ this.store } />) }/>
                <Route path   = "/district/:districtId"
                    component = { () => (<District store={ this.store } />) }/>

                { /* Messaging */ }
                <Route path   = "/msgs"
                    component = { () => (<Messaging store={ this.store } />) }/>
                <Route path   = "/chat"
                    component = { () => (<Chat store={ this.store } />) }/>

                { /* Services */ }
                <Route path   = "/screener"
                    component = { () => (<Screener store={ this.store } />) }/>
                <Route path   = "/trade"
                    component = { () => (<Trade store={ this.store } />) }/>

                { /* Resources */ }
                <Route path   = "/causes"
                    component = { () => (<Causes store={ this.store } />) }/>
                <Route path   = "/help"
                    component = { () => (<Help store={ this.store } />) }/>
                <Route path   = "/privacy"
                    component = { () => (<Privacy store={ this.store } />) }/>
                <Route path   = "/rewards"
                    component = { () => (<Rewards store={ this.store } />) }/>
                <Route path   = "/terms"
                    component = { () => (<Terms store={ this.store } />) }/>

                { /* Adminisration */ }
                <Route path   = "/ref/:referralId"
                    component = { () => (<Referral store={ this.store } />) }/>
                <Route path   = "/signin"
                    component = { () => (<SignIn store={ this.store } />) }/>
                <Route path   = "/signout"
                    component = { () => (<SignOut store={ this.store } />) }/>
                <Route path   = "/status"
                    component = { () => (<Status store={ this.store } />) }/>

                <Footer store={ this.store } />
            </div>
        </HashRouter>
    }
}
