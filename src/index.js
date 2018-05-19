/* Import React modules. */
import React    from 'react'
import ReactDOM from 'react-dom'

/* Import the css. */
import './css/styles.css'
import './css/font-awesome.min.css'

/* Import the full application component. */
import App from './App'

/* Import the app store. */
import store from './store'

/* Reference the DOM's app id. */
const app = document.getElementById('app')

ReactDOM.render(<App store={ store } />, app)
