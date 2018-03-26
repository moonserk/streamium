import { combineReducers } from 'redux';
import { REQUEST_CARDS, RECEIVE_CARDS } from '../actions/actions' 

function cards(state = {
    isFetching: false,
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

const rootReducer = combineReducers({
    cards
})

export default rootReducer