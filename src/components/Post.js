import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props)

        /* Localize store to class object. */
        this.store = this.props.store

        /* Retrieve post data from props. */
        this.post = this.props.post
    }

    render() {
        return <div style={ styles.container }>
            <p>
                <strong>{ this.post.t }</strong><br/>
                <strong>{ this.post.b }</strong><br/>
                <strong>{ this.post.e }</strong>
            </p>
        </div>
    }
}

/* Initialize stylesheet. */
const styles = {
  	container: {
  		// color: '#3563a8',
    	fontSize: '1.1em',

        backgroundColor: '#efefef',

        padding: '5px',
        marginBottom  : '1em',
  		borderBottom  : '2px solid #3563a8',
  	}
}
