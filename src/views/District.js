import React from 'react'

import { observer } from 'mobx-react'

import {
    NavLink,
    Redirect
} from 'react-router-dom'

import districts from '../data/districts'

import { Post } from '../components'

import moment from 'moment'

/* Initialize array of active posts. */
let activePosts = []

function PostList(_props) {
    /* Retrieve the store from props. */
    const store = _props.store

    /* Retrieve the posts from props. */
    const posts = _props.posts

    /* Map all posts to list items. */
    const listItems = posts.map((post) =>
        <Post key={ post.id } store={ store } post={ post } />
    )

    /* Return the list items. */
    return listItems
}

@observer
export default class District extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Retrive the district name. */
        this.districtName = districts[this.store.loadedDistrict] ? districts[this.store.loadedDistrict].name : 'Unknown location'

        /* Retrive the district manager. */
        this.districtManager = districts[this.store.loadedDistrict] ? districts[this.store.loadedDistrict].manager : null

        /* Bind buttons. */
        this._buyCoins = this._buyCoins.bind(this)

        /* Initialize the state. */
        this.state = {
            redirect: null,
            isLoading: true,
            isBoosting: false,
            posts: []
        }
    }

    render() {
        if (this.state.redirect)
            return <Redirect push to={ this.state.redirect } />

        if (this.state.isLoading)
            return <div class="container-fluid">
                <h2>{ this.districtName }</h2>

                <div style={ styles.districtManager }>
                    <a class="btn btn-info" style={ styles.districtManagerText } href={ 'https://ropsten.etherscan.io/address/' + this.districtManager } target="_blank">
                    { this.districtManager }</a>
                </div>

                { this._loadingPosts() }
            </div>

        return <div class="container-fluid">
            <h2>{ this.districtName }</h2>

            <div style={ styles.districtManager }>
                <a class="btn btn-info" style={ styles.districtManagerText } href={ 'https://ropsten.etherscan.io/address/' + this.districtManager } target="_blank">
                { this.districtManager }</a>
            </div>

            <div class="card-columns" style={ (this.store.device.width <= 480) ? styles.cardColumns : (this.store.device.width <= 800) ? styles.cardColumns_2 : styles.cardColumns_3 }>
                <PostList store={ this.store } posts={ this.state.posts } />
            </div>

            <div class="modal fade" id="postDetails" tabIndex="-1" role="dialog" aria-labelledby="postDetailsLabel" aria-hidden="true" style={ styles.modal }>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        { this._modalContent() }
                    </div>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        /* Load the most recent posts. */
        if (this.districtManager)
            this._loadPosts()
    }

    _loadingPosts() {
        // NOTE Customize loading icons at https://loading.io/
        const loading_sm = 'https://i.imgur.com/bZBh3D4.gif'    // 286px
        const loading_lg = 'https://i.imgur.com/WsP51cT.gif'    // 384px

        if (this.districtManager)
            return <div class="text-center">
                <h3>Scanning the blockchain<br/>Please wait</h3>
                <img class="img-fluid" style={ styles.loading } src={ loading_lg } />
            </div>
    }

    _loadPosts() {
        /* Initialize the current network. */
        const network = this.store.eth.network

        /* Initialize providers. */
        const providers = this.store.ethers.providers

        /* Connect to INFURA. */
        const infuraProvider = new providers.InfuraProvider(network)

        /* Connect to Etherscan. */
        const etherscanProvider = new providers.EtherscanProvider(network)

        /* Initialize a NEW provider (with fallback). */
        const provider = new providers.FallbackProvider([
            infuraProvider,
            etherscanProvider
        ])

        /* Reset provider pointer for the last 17,280 (3-days of) blocks. */
        provider.resetEventsBlock ( this.store.eth.lastBlockNum - 172800 )

        /* Initialize new District Manager contract. */
        const contract = new this.store.ethers.Contract(
            this.districtManager,
            this.store.districtManagerAbi,
            provider)

        /* Initialize listener for log events. */
        contract.ontaboosocialpost = (_districtId, _owner, _postId, _post) => {
            try {
                /* Parse the JSON data. */
                const post = JSON.parse(_post)

                /* Validate post expiration is recent. */
                if (post.e < moment().subtract(30, 'days').valueOf())
                    return

                /* Display post. */
                this._displayPost(_owner, _postId, post)
            } catch(e) {
                // silently fail if data format is incorrect
                return console.error('Check the data for [ %s ]', _post)
            }
        }
    }

    _displayPost(_owner, _postId, _post) {
        /* Validate unique post. */
        if (activePosts.includes(_postId))
            return

        /* Add posts to active list. */
        activePosts.push(_postId)

        /* Add owner to post data. */
        _post.owner = _owner

        /* Add post id to post data. */
        _post.id = _postId

        /* Validate the post data. */
        if (!_post || !_post.t || !_post.b || !_post.e)
            return console.error('Incorrect data format for [ %s ]', _post)

        /* Retrieve the current posts. */
        const posts = this.state.posts

        /* Clear loading message (if needed). */
        if (posts[0] == 'loading posts, please wait...')
            this.setState({ isLoading: false, posts: [_post] })
        else
            this.setState({ isLoading: false, posts: [_post, ...posts] })
    }

    _buyCoins (_modalCaller = false) {
        /* Close the modal window (if necessary). */
        if (_modalCaller)
            $('#postDetails').modal('hide')

        /* Initialize redirect target. */
        const redirect = '/coins'

        /* Update the state. */
        this.setState({ redirect })
    }

    _showBoost () {
        /* Initialize boosting flag. */
        const isBoosting = true

        this.setState({ isBoosting })
    }

    _addBoost () {
        alert('boosting!')
    }

    _cancelBoost () {
        /* Initialize boosting flag. */
        const isBoosting = false

        this.setState({ isBoosting })
    }

    _needsCoins () {
        return <div style={ styles.needCoins }>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <small>
                    Oops! It looks like you're all out of Gold Coins.
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                        style={ styles.buyCoins }
                        onClick={ () => this._buyCoins(true) }>
                        buy more coins
                    </button>
                </small>

                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    }

    _modalContent () {
        /* Retrive the active district name. */
        const districtName = districts[this.store.activeDistrict].name

        if (this.state.isBoosting)
            return <div>
                <div class="modal-header">
                    <h5 class="modal-title" id="postDetailsLabel">{ this.store.postTitle }</h5>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="text-center">
                        <h2 class="text-secondary">BOOST YOUR LIT</h2>
                    </div>

                    <h5>Instantly bump this post to the TOP of <span class="text-info">{ districtName }!</span></h5>

                    <p>
                        Srsly, how <strong>LIT</strong> is this post right now?
                    </p>

                    <div class="progress">
                        <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: '15%' }}
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100">0 LIT</div>
                    </div>

                    <hr/>

                    <div class="row">
                        <div class="col-6 text-center">
                            <small>LIT Level</small><br/>
                            <strong>0</strong>
                        </div>

                        <div class="col-6 text-center">
                            <small>LIT Rank</small><br/>
                            <strong>Unknown</strong>
                        </div>
                    </div>

                    { this._needsCoins() }
                </div>

                <div class="modal-footer">
                    <button disabled type="button" class="btn btn-primary" onClick={ () => this._addBoost() }>Boost My LIT</button>
                    <button type="button" class="btn btn-danger" onClick={ () => this._cancelBoost() }>Cancel</button>
                </div>
            </div>
        else
            return <div>
                <div class="modal-header">
                    <h5 class="modal-title" id="postDetailsLabel">{ this.store.postTitle }</h5>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    { this.store.postBody }
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" onClick={ () => this._showBoost() }>Boost LIT</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
    }
}

/* Initialize stylesheet. */
const styles = {
  	districtManager: {
        fontSize  : '0.5em',
        fontStyle : 'italic',
        color     : '#a99',

        marginTop    : '-7px',
        marginBottom : '15px',
        marginLeft   : '5px'
  	},
    districtManagerText: {
        fontSize: '0.7em',
        padding: '2px 5px'
    },
    cardColumns: {
        // columnCount: 1
  	},
    cardColumns_2: {
        // columnCount: 2
  	},
    cardColumns_3: {
        // columnCount: 3
  	},
    cardColumns_4: {
        // columnCount: 4
    },
    modal: {
        marginRight: '18px'
    },
    loading: {
        marginTop: '25px',
        width: '50%'
    },
    buyCoins: {
        margin: '0px 5px',
        padding: '0px 5px'
    },
    needCoins: {
        marginTop: '15px'
    }
}
