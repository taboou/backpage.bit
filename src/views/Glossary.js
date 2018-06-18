import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import { Heading } from '../components'

@observer
export default class Glossary extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return <div class="container-fluid">
            <Heading title={ 'Glossary' } />

                <div class="accordion" id="glossary">

                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-block btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    AMP — Asian Massage Parlor
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#glossary">
                            <div class="card-body">
                                ...
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-block btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    B&amp;D — Bondage and Dominance
                                </button>
                            </h5>
                        </div>

                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#glossary">
                            <div class="card-body">
                                ...
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-block btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    CBJ — Covered Blow Job
                                </button>
                            </h5>
                        </div>

                        <div id="collapseThree" class="collapse" aria-labelledby="headingTwo" data-parent="#glossary">
                            <div class="card-body">
                                (oral sex with a condom)
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                ATF-   All Time Favorite<br/>
                ATM-   Ass To Mouth<br/>
                <br/>
                B&S-   Bait & switch<br/>
                Bareback-   Without condom<br/>
                BBBJ-   Bare Back Blow Job (oral sex without condom)<br/>
                BBBJC-   Bare Back Blow Job To Completion<br/>
                Bed Dance-   A dance you get while in a reclining position, such as on a bed or sofa.<br/>
                BirdWatching-   BBBJTC and she swallows.<br/>
                BJ-   Blow Job (oral sex)<br/>
                BLS-   Balls, Licking and Sucking<br/>
                Blue Pill-   Viagra<br/>
                BSD-   Big Swinging Dick<br/>
                <br/>
                CD-   Cross Dresser (oral sex with a condom)<br/>
                CIM-   Cum in mouth<br/>
                Clockwatcher-   A provider who watches the clock/rushes you through the session.<br/>
                COF-   Cum on Face<br/>
                Couch Dance-   We define a couch dance as a dance you get while seated in a couch or chair in a private or semi-private area of the club. See also, table dance.<br/>
                Cover-   A condom<br/>
                <br/>
                DATO-   Dining at the O (rimming)<br/>
                DATY-   Dining at the Y (cunnilingus)<br/>
                DDE-   Doesn't do Extras<br/>
                DDG-   Drop Dead Gorgeous<br/>
                DFK-   Deep French Kissing<br/>
                Donation-   Payment to a Provider<br/>
                DP-   Double Penetration<br/>
                DSL-   Dick Sucking Lips<br/>
                <br/>
                Feature (Dancer)-   A dancer (usually an ex-pornstar) who is hired by a club to perform stage shows. A pornstar or other high profile girl hired by a brothel.<br/>
                French-   Oral Sex<br/>
                French Kissing-   Kissing with tongue contact<br/>
                FS-   Full Service<br/>
                Full Service-   Sexual Intercourse<br/>
                <br/>
                GFE-   Girl Friend Experience<br/>
                Greek-   Anal Sex<br/>
                Grinding-   She rubs her pussy on your dick<br/>
                GS-   Golden Shower<br/>
                <br/>
                Half and Half-   Oral sex followed by intercourse<br/>
                HJ-   Hand Job<br/>
                <br/>
                IMHO-   In My Humble Opinion<br/>
                Incall-   You meet the girl at their place<br/>
                <br/>
                LE-   Law Enforcement<br/>
                LOL-   Laughing Out Loud<br/>
                <br/>
                Masochism-   Deriving pleasure by receiving pain or punishment<br/>
                Mileage-   The amount of value you get for the money you spend<br/>
                MP-   Massage Parlor<br/>
                MSOG-   Multiple shots on goal (you get to cum more than once)<br/>
                <br/>
                Outcall-   The girl comes to your place<br/>
                <br/>
                PSE-   Porn Star Experience<br/>
                <br/>
                Rimming-   Oral stimulation of anus<br/>
                ROB-   Rip off Bitch<br/>
                Russian-   Tit Fuck<br/>
                <br/>
                Sadism-   Deriving pleasure by inflicting pain or punishment on others<br/>
                S&M-   Sadism and Masochism<br/>
                SW-   Street Walker<br/>
                <br/>
                Table Dance-   A dance you get while seated in a couch or chair in a non private area of the club.<br/>
                TV-   Transvestite<br/>
                <br/>
                YMMV-   Your Mileage May Vary<br/>
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
