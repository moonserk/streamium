import axios from 'axios'

export const REQUEST_CARDS = 'REQUEST_CARDS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'

export function requestCards(card){
    return {
        type: REQUEST_CARDS,
        card
    }
}

export function receiveCards(card, json){
    return {
        type: RECEIVE_CARDS,
        card,
        cards: json.data.children.map(item => item),
        receiveAt: Date.now()
    }
}

export function fetchCards(card){
    return dispatch => {
        dispatch(requestCards(card))
        fetch(`https://www.reddit.com/r/${card}.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveCards(card, json)))
    }
}

function shouldFetchCards(state, card) {
    const posts = state.postsByCard[card]
    if (!posts) {
      return true
    } else if (posts.isFetching) {
      return false
    } else {
      return posts.didInvalidate
    }
  }

export function fetchCardsIfNeeded(card){
    return (dispatch, getState) => {
        if(shouldFetchCards(getState(), card)){
            return dispatch(fetchCards(card))
        }
    }
}
