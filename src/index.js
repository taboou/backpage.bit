/* Import React modules. */
import React    from 'react'
import ReactDOM from 'react-dom'

/* Import the full application component. */
import App from './components/App'

/* Reference the DOM's app id. */
const app = document.getElementById('app')

/* Render the app to the DOM. */
ReactDOM.render(<App />, app)