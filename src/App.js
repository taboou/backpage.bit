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

import Home     from './views/Home'
import Post     from './views/Post'
import Help     from './views/Help'

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

                    <Route 
                        exact path = "/"
                        component  = { () => (<Home store={ this.store } />) }/>
                    
                    <Route
                        path      = "/post"
                        component = { () => (<Post store={ this.store } />) }/>
                    
                    <Route 
                        path      = "/help"
                        component = { () => (<Help store={ this.store } />) }/>
                
                    <Footer store={ this.store } />
                </div>
            </HashRouter>
        )
    }

    componentDidMount() {
this.store.loadHello()
    }
}
