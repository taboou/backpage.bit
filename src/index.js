/* Import React modules. */
import React    from 'react'
import ReactDOM from 'react-dom'

import { 
	Router, 
	Route, 
	Switch,
	IndexRoute,
	hashHistory
} from 'react-router'

/* Import the css. */
import './css/styles.css'

/* Import the full application component. */
import App from './App'

/* Import the app store. */
import store from './store'

/* Reference the DOM's app id. */
const app = document.getElementById('app')

/* Render the app to the DOM. */
// ReactDOM.render(
// 	<Router history={ hashHistory }>
// 		<Route path="/" component={ App }></Route>
// 	</Router>, 
// 	app
// )
ReactDOM.render(<App store={ store } />, app)

