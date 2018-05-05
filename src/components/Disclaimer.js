import React from 'react'

import FontAwesome from 'react-fontawesome'

export default class Disclaimer extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store
    }

    render() {
        return (
            <div>
                <h2>Disclaimer</h2>

                <div class="row">
                    <div class="col">
                        This section contains sexual content, including pictorial nudity and adult language. 
                        It is to be accessed only by persons who are 18 years of age or older (and is not considered to be a minor in his/her state of residence) and who live in a community or local jurisdiction where nude pictures and explicit adult materials are not prohibited by law. 
                        By accessing this website, you are representing to us that you meet the above qualifications. 
                        A false representation may be a criminal offense.
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        I confirm and represent that I am 18 years of age or older (and am not considered to be a minor in my state of residence) and that I am not located in a community or local jurisdiction where nude pictures or explicit adult materials are prohibited by any law. 
                        I agree to report any illegal services or activities which violate the Terms of Use. 
                        I also agree to <a href="javascript://">report suspected exploitation of minors and/or human trafficking</a> to the appropriate authorities.
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <hr />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <strong>I have read and agree to this disclaimer as well as the <a href="javascript://">Terms of Use</a>.</strong>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={ this.agree.bind(this) }>
                        I agree <FontAwesome name='thumbs-up' /></button>
                    </div>
                    <div class="col text-center">
                        <button type="button" class="btn btn-danger btn-lg btn-block">
                        I don't agree <FontAwesome name='thumbs-down' /></button>
                    </div>
                </div>
            </div>
        )
    }

    agree() {
console.log('fired the Post agree')
        this.store.agree()
    }

}
