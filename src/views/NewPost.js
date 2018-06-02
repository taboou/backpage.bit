import React from 'react'

import { observer } from 'mobx-react'

import { NavLink, Redirect } from 'react-router-dom'

import FontAwesome from 'react-fontawesome'

import Dropzone from 'react-dropzone'

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
            imageCoverUrl : '',
            files: [],

            fileAsDataUrl: '',
            fileOutput: '',
            fileOutput2: '',
            progress: ''
        }
    }

    render() {
        /* Verify agreement of disclaimer. */
        // if (!this.store.hasAgreedToDisclaimer)
        //     return <Disclaimer store={ this.store } />

        /* Retrieve the available accounts. */
        const { accounts } = this.store.eth

        /* Verify available accounts. */
        if (accounts[0] == null)
            return <Redirect to="/signin" />
            // return <SignIn store={ this.store } />

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
                        <div class="container">
                            <span class="btn btn-success fileinput-button">
                                <i class="glyphicon glyphicon-plus"></i>
                                <span>Add your photos...</span>
                                <input id="fileupload" type="file" name="files[]" multiple/>
                            </span>
                            <br/>
                            <br/>
                            <div id="progress" class="progress">
                                <div class="progress-bar progress-bar-success"></div>
                            </div>
                            <div id="files" class="files"></div>
                        </div>
                    </div>

                    <div class="col-5 text-right">
                        <img class="img-thumbnail" id="img" width="300" height="300" /><br/>

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
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={ this._addPost.bind(this) }>
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
                    <h5 class="modal-title" id="exampleModalLabel">Posting Rate Limit</h5>
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
        /* Localize this. */
        const self = this

        const url = 'https://api.imgur.com/3/image'

        $('#fileupload').fileupload({
            url: url,
            headers: {
                Authorization: 'Client-ID 5561cfd1619a32b'
            },
            // xhrFields: {
            //     withCredentials: true
            // },
            dataType: 'json',
            autoUpload: false,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            // maxFileSize: 99999000,
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/
                .test(window.navigator.userAgent),
            // previewMaxWidth: 300,
            // previewMaxHeight: 300,
            // previewCrop: true
        }).on('fileuploadadd', function (e, data) {
            data.context = $('<div/>').appendTo('#files');

            $.each(data.files, function (index, file) {
                var node = $('<p/>')
                        .append($('<span/>').text(file.name));
                node.appendTo(data.context);
            })

        }).on('fileuploadprocessalways', function (e, data) {
            var index = data.index,
                file = data.files[index],
                node = $(data.context.children()[index]);

            if (file.preview) {
                try {
                    let img = file.preview
                        img.crossOrigin = "Anonymous"   // TODO Do we still need this???

                    let dataUrl = img.toDataURL()

                    self._processDataUrl(dataUrl)
                } catch(e) {
                    console.error(e)

                    const reader = new FileReader()
                    reader.onload = () => {
                        const dataUrl = reader.result

                        self._processDataUrl(dataUrl)
                    }
                    reader.readAsDataURL(data.files[0])
                }

                // node
                //     .prepend('<br>')
                //     .prepend(file.preview);
            }

            if (file.error) {
                node
                    .append('<br>')
                    .append($('<span class="text-danger"/>').text(file.error));
            }

            data.submit().always(function (err, result) {
console.log('submitted!!!!!');
                    // $this.remove();
                    console.error('data.submit err', err)
                    console.log('data.submit result', result)

                })

//             data.submit()
//                 .then((err, result) => {
// console.error('data.submit err', err)
// console.log('data.submit result', result)
//                 })
//                 .catch(err => console.error('data.submit CAUGHT error', err))

        }).on('fileuploadprogressall', function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );

        }).on('fileuploadfail', function (e, data) {
            $.each(data.files, function (index) {
                var error = $('<span class="text-danger"/>').text('File upload failed.');
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            });

        }).prop('disabled', !$.support.fileInput)
            .parent().addClass($.support.fileInput ? undefined : 'disabled');
    }


    _processDataUrl(dataUrl) {
        /* Localize this. */
        const self = this

        /* Load the image preview. */
        document.getElementById('img').src = dataUrl

        /* Intialize imgur client id. */
        const clientId = '5561cfd1619a32b'

        /* Generate authorization string. */
        const auth = 'Client-ID ' + clientId

        /* Initialize imgur endpoint. */
        const endpoint = 'https://api.imgur.com/3/image'

        /* Initialize superagent request. */
        const request = require('superagent')

        /* Parse the base64 data from the url. */
        const base64Data = dataUrl.split(',')[1]

        /* Upload base64 data to imgur (anonymously). */
        request
            .post(endpoint)
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
    }

    /* User agrees to the disclaimer. */
    _addPost() {
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
