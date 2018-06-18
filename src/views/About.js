import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import { Heading } from '../components'

@observer
export default class About extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <Heading title={ 'About Us' } />

            <h5>
                Why Backpage Zero?
            </h5>

            <p>
                When Backpage.com shutdown due to heavy pressure from the US authorities, it removed the primary platform that independent sex workers across an entire country used to operate their business.
            </p>

            <p>
                As a result, most sex workers were forced to turn to exploitive individuals and/or services in order to preserve their survival and the survival of those that depend on them.
            </p>

            <p>
                Backpage Zero runs on the <a href="https://zeronet.io/" target="_blank"><strong>ZeroNet</strong></a> and uses digital currencies to allow for a self-governened community of sex workers to operate without worry of the devestation that comes when one day you wake up and find out you're out of a job because another platform got shutdown.
            </p>

            <p>
                Join us <a href="https://t.me/Backpage0" target="_blank"><strong>@Backpage0</strong></a> as we continue building our community of experts to write the official guide on How-to #SexWork, once and for all.
            </p>
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
