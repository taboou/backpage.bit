import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import {
    Disclaimer,
    SignIn
} from '../components'

import districts from '../data/districts'

@observer
export default class NewPost extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Retrive the district name. */
        this.districtName = districts[this.store.activeDistrict] ? districts[this.store.activeDistrict].name : 'Unknown'

        /* Initialize the state. */
        this.state = {
            title : '',
            body  : '',
            imageCoverUrl : ''
        }
    }

    render() {
        /* Verify agreement of disclaimer. */
        if (!this.store.hasAgreedToDisclaimer)
            return <Disclaimer store={ this.store } />

        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Verify available accounts. */
        if (accounts[0] == null)
            return <SignIn store={ this.store } />

        return <div class="container-fluid">
            <h2>
                Post in <NavLink to={ '/district/' + this.store.activeDistrict }>{ this.districtName }</NavLink>
                <div style={ styles.changeDistrict }>[<NavLink to="/">change district</NavLink>]</div>
            </h2>

            <form>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <input
                                id    = "title"
                                class = "form-control"
                                type  = "text"
                                value = { this.state.title }
                                placeholder = "Enter a TITLE for you post"
                                onChange    = { (evt) => this.setState({ title : evt.target.value }) } />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <textarea
                                id    = "body"
                                class = "form-control"
                                rows  = "3"
                                value = { this.state.body }
                                placeholder = "Enter a MESSAGE / BODY for your post in this area."
                                onChange    = { (evt) => this.setState({ body : evt.target.value }) }>
                            </textarea>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-7">
                        <div class="form-group">
                            <label for="imageCover" class="bmd-label-floating">Upload a Image Cover</label>

                            <input type="file" accept="image/*" class="form-control-file" id="imageCover" onChange={ this.readFile.bind(this) } />

                            <small class="text-muted">
                                Upload an image cover for your post.<br />
                                Accepted formats: JPG, GIF or PNG
                            </small>
                        </div>
                    </div>
                    <div class="col-5 text-right">
                        <img class="img-thumbnail" id="img" width="150" height="150" /><br/>

                        <small>
                            <a href={ this.state.imageCoverUrl } target="_blank">
                                { this.state.imageCoverUrl }</a>
                        </small>
                    </div>
                </div>
            </form>

            <hr />

            <div class="row">
                <div class="col text-center">
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={ this.addPost.bind(this) }>
                    Submit New Post <FontAwesome name='thumbs-up' /></button>
                </div>
                <div class="col text-center">
                    <button type="button" class="btn btn-danger btn-lg btn-block" onClick={ () => document.location = '/' }>
                    Cancel <FontAwesome name='thumbs-down' /></button>
                </div>
            </div>

            <div class="modal fade" id="modalMissingTitle" tabIndex="-1" role="dialog" aria-labelledby="modalMissingTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Missing Title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Please enter a title for your new post.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="modalMissingBody" tabIndex="-1" role="dialog" aria-labelledby="modalMissingBody" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Missing Body</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Please enter a message / body for your new post.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="modalMissingCover" tabIndex="-1" role="dialog" aria-labelledby="modalMissingCover" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Missing Image Cover</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    Please upload an image cover for your new post.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="modalRateLimit" tabIndex="-1" role="dialog" aria-labelledby="modalRateLimit" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Rate Limit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    { this.store.errorMsg }
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>
                  </div>
                </div>
              </div>
            </div>

        </div>
    }

    componentDidMount() {
// console.log('page has mounted')
    }

    readFile(el) {
        /* Localize this. */
        const self = this

        /* Verify file array exists. */
        if (el && el.target && el.target.files[0]) {
            /* Initialize file reader. */
            const FR = new FileReader()

            /* Initialize new event listener. */
            FR.addEventListener('load', (e) => {
                /* Retrieve the data result. */
                const dataUrl = e.target.result
// console.log('dataUrl', dataUrl)

                /* Load the image preview. */
                document.getElementById('img').src = dataUrl

                /* Intialize imgur client id. */
                const clientId = '5561cfd1619a32b'

                /* Generate authorization string. */
                const auth = 'Client-ID ' + clientId

                /* Initialize imgur endpoint. */
                const imgurUrl = 'https://api.imgur.com/3/image'

                /* Initialize superagent request. */
                const request = require('superagent')

                /* Parse the base64 data from the url. */
                const base64Data = dataUrl.split(',')[1]

                /* Upload base64 data to imgur (anonymously). */
                request
                    .post(imgurUrl)
                    .send({ image: base64Data })
                    .set('Authorization', auth)
                    .set('accept', 'json')
                    .end((err, res) => {
                        if (err) return console.error(err)

                        /* Retrieve the response body. */
                        const respBody = res.body
// console.log('respBody', respBody)

                        /* Set cover image url. */
                        self.setState({ imageCoverUrl : respBody.data.link })
                    })
            })

            /* Read the image data. */
            FR.readAsDataURL( el.target.files[0] )
        }

    }

    /* User agrees to the disclaimer. */
    addPost() {
        /* Retrieve the title. */
        const title = this.state.title

        /* Validate the title. */
        if (!title || title == '')
            return $('#modalMissingTitle').modal()

        /* Retrieve the body. */
        const body = this.state.body

        /* Validate the body. */
        if (!body || body == '')
            return $('#modalMissingBody').modal()

        /* Retrieve the image cover url. */
        const imageCoverUrl = this.state.imageCoverUrl

        /* Validate the image cover url. */
        if (!imageCoverUrl || imageCoverUrl == '')
            return $('#modalMissingCover').modal()

        /* Initialize moment module. */
        const moment = require('moment')

        /* Generate timestamp (in milliseconds). */
        const timestamp = moment().valueOf()

        /* Build the post package. */
        const pkg = {
        	t:title,
        	b:body,
        	m:null,
        	ic:imageCoverUrl,
        	ig:null,
        	pg:null,
        	vg:null,
        	e:timestamp + (3 * 24 * 60 * 60 * 1000)    // 72-hour default (in milliseconds)
        }

        this.store.addPost = pkg
    }

}


/* Initialize stylesheet. */
const styles = {
    changeDistrict: {
        display    : 'inline',
        fontSize   : '0.5em',
        marginLeft : '10px'
    }
}
