import { combineReducers } from 'redux';
import { REQUEST_CARDS, RECEIVE_CARDS, TOGGLE_MENU, TOGGLE_SEARCH } from '../actions/actions' 

function fetchCards(state = {
    isFetching: true,
    didInvalidate: false,
    items: []
}, action){
    switch(action.type){
        case REQUEST_CARDS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_CARDS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.cards,
                lastUpdated: action.receiveAt
            })
        default:
            return state
    }
}

function navbarReducer(state = {menuToggle: false, searchToggle: false}, action){
    switch(action.type){
        case TOGGLE_MENU:
            return Object.assign({}, state, {
                menuToggle: !state.menuToggle
            })
        case TOGGLE_SEARCH:
            return Object.assign({}, state, {
                searchToggle: !state.searchToggle
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    fetchCards,
    navbarReducer
})

export default rootReducer