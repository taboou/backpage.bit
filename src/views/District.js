import React from 'react'

import { observer } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import districts from '../data/districts'

import { Post } from '../components'

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

        return <div class="container-fluid">
            <h2>{ this.districtName }</h2>

            <div style={ styles.districtManager }>
                => <a href={ 'https://ropsten.etherscan.io/address/' + this.districtManager } target="_blank">
                { this.districtManager }</a>
            </div>

            <div class="row">
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

                <h3>Loading blockchain posts, please wait...</h3>
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

            /* Display post. */
            this.displayPost(_owner, _postId, _post)
        }
    }

    displayPost(_owner, _postId, _post) {
        try {
            /* Parse the JSON data. */
            const post = JSON.parse(_post)

            /* Add owner to post data. */
            post.owner = _owner

            /* Add post id to post data. */
            post.id = _postId

            /* Validate the post data. */
            if (!post || !post.t || !post.b || !post.e)
                return console.error('Incorrect data format for [ %s ]', JSON.stringify(post))

            /* Retrieve the current posts. */
            const posts = this.state.posts

            /* Clear loading message (if needed). */
            if (posts[0] == 'loading posts, please wait...')
                this.setState({ isLoading: false, posts: [post] })
            else
                this.setState({ isLoading: false, posts: [post, ...posts] })
        } catch(e) {
            // silently fail if data format is incorrect
            return console.error('Incorrect data format for [ %s ]', JSON.stringify(_post))
        }
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
  	}
}
