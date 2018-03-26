import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import cards from '../reducers/reducer'

export default function configureStore(initialState) {
    return createStore(
        cards,
      initialState,
      applyMiddleware(
        thunkMiddleware
      )
    )
  }