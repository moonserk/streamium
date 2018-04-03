// require('./assets/stylesheets/style.scss');

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/components/App'
import Home from './app/containers/Home'
import { BrowserRouter } from 'react-router-dom'
//import injectTapEventPlugin from 'react-tap-event-plugin'
import './assets/stylesheets/style.scss';
//injectTapEventPlugin();
import configureStore from './app/store/configureStore'
import { RECEIVE_CARDS, fetchCards, receiveCards,requestCards, toggleMenu, toggleSearch } from './app/actions/actions';

const store = configureStore()

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))

