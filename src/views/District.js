import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import districts from '../data/districts'

import { Post } from '../components'

import moment from 'moment'

/* Initialize array of active posts. */
let activePosts = []

function PostList(_props) {
    /* Retrieve the posts from props. */
    const posts = _props.posts

    /* Map all posts to list items. */
    const listItems = posts.map((post) =>
        <Post key={ post.id } post={ post } />
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

        this.state = {
            isLoading: true,
            posts: []
        }
    }

    render() {
        if (this.state.isLoading)
            return <div class="container-fluid">
                <h2>{ this.districtName }</h2>

                <div style={ styles.districtManager }>
                    => <a href={ 'https://ropsten.etherscan.io/address/' + this.districtManager } target="_blank">
                    { this.districtManager }</a>
                </div>

                { this.loadingPosts() }
            </div>
console.log('this.store.device.width', this.store.device.width);
        return <div class="container-fluid">
            <h2>{ this.districtName }</h2>

            <div style={ styles.districtManager }>
                => <a href={ 'https://ropsten.etherscan.io/address/' + this.districtManager } target="_blank">
                { this.districtManager }</a>
            </div>

            <div class="card-columns" style={ (this.store.device.width <= 480) ? styles.cardColumns : (this.store.device.width <= 800) ? styles.cardColumns_2 : styles.cardColumns_3 }>
                <PostList posts={ this.state.posts } />
            </div>
        </div>
    }

    componentDidMount() {
        /* Load the most recent posts. */
        if (this.districtManager)
            this.loadPosts()
    }

    loadingPosts() {
        if (this.districtManager)
            return <div>
                <br /><br />

                <h3>Loading posts from the blockchain.<br/>Please wait...</h3>
            </div>
    }

    loadPosts() {
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
// console.log('owner  : ', _owner)
// console.log('postId : ', _postId)
// console.log('post   : ', _post)

            try {
                /* Parse the JSON data. */
                const post = JSON.parse(_post)

                /* Validate post expiration is recent. */
                if (post.e < moment().subtract(30, 'days').valueOf())
                    return

                /* Display post. */
                this.displayPost(_owner, _postId, post)
            } catch(e) {
                // silently fail if data format is incorrect
                return console.error('Check the data for [ %s ]', _post)
            }
        }
    }

    displayPost(_owner, _postId, _post) {
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
    }
}
