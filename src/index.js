// require('./assets/stylesheets/style.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
//import injectTapEventPlugin from 'react-tap-event-plugin'
import './assets/stylesheets/style.scss';
//injectTapEventPlugin();
import configureStore from './app/store/configureStore'
import { RECEIVE_CARDS, fetchCards, receiveCards,requestCards } from './app/actions/actions';

const store = configureStore()

console.log(store.getState())

store.dispatch(fetchCards('reactjs'))

const timer = setInterval(() => {
    console.log(store.getState())
}, 2000)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'))

