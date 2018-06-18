import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import {
    Bootstrap,
    Heading
} from '../components'

@observer
export default class News extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <Heading title={ 'Daily News' } />

            <p class="lead text-center">
                Daily News is coming soon...
            </p>

            <Bootstrap store={ this.store } />

            <div>
                <h5>Here is what's on the way...</h5>
                
                <ol class="list-unstyled ml-4">
                    <li><FontAwesome name="check" /> Articles from your favorite providers</li>
                    <li><FontAwesome name="check" /> Community events</li>
                </ol>
            </div>

            <div>
                <h5>Sample Articles</h5>

                <ol>
                    <li>
                        <NavLink to="/news/getting-a-better-response">
                            Getting a Better Response
                        </NavLink>
                    </li>
                </ol>
            </div>
        </div>
    }

    componentDidMount() {
        /* Scroll to top. */
        $('html,body').scrollTop(0)
    }
}

/* Initialize stylesheet. */
const styles = {

}
