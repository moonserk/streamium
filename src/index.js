require('./assets/stylesheets/style.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import injectTapEventPlugin from 'react-tap-event-plugin'

//injectTapEventPlugin();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))

