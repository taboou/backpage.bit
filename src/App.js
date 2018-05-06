import React from 'react'

import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'

import { observer } from 'mobx-react'

/* Import Bootstrap globally. */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home    from './views/Home'
import Buy     from './views/Buy'
import Help    from './views/Help'
import Account from './views/Account'
import NewPost from './views/NewPost'
import Post    from './views/Post'
import Privacy from './views/Privacy'
import Terms   from './views/Terms'

@observer
export default class App extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Header store={ this.store } />

                    <Route path   = "/" exact 
                        component = { () => (<Home store={ this.store } />) }/>

                    <Route path   = "/buy"
                        component = { () => (<Buy store={ this.store } />) }/>
                    <Route path   = "/help"
                        component = { () => (<Help store={ this.store } />) }/>
                    <Route path   = "/account"
                        component = { () => (<Account store={ this.store } />) }/>
                    <Route path   = "/new-post"
                        component = { () => (<NewPost store={ this.store } />) }/>
                    <Route path   = "/post/:postId"
                        component = { () => (<Post store={ this.store } />) }/>
                    <Route path   = "/privacy"
                        component = { () => (<Privacy store={ this.store } />) }/>
                    <Route path   = "/terms"
                        component = { () => (<Terms store={ this.store } />) }/>
                    
                    <Footer store={ this.store } />
                </div>
            </HashRouter>
        )
    }

    componentDidMount() {
// this.store.loadHello()
this.store.loadNetworkStatus()
    }
}
