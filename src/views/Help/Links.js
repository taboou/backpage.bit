import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

@observer
export default class Help extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="mt-4">

            <div class="col-10 offset-1 my-4">
                <NavLink to="/about">
                    <button class="btn btn-lg btn-block btn-outline-info">
                        About Us
                    </button>
                </NavLink>
            </div>

            <div class="col-10 offset-1 my-4">
                <NavLink to="/glossary">
                    <button class="btn btn-lg btn-block btn-outline-info">
                        Glossary
                    </button>
                </NavLink>
            </div>

        </div>
    }
}

/* Initialize stylesheet. */
const styles = {

}
