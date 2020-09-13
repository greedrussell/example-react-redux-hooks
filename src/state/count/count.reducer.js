import actionTypes from './actionTypes'
import { reducerDecrement } from './reducers/decrement.reducer'
import { reducerIncrement } from './reducers/increment.reducer'

const initialState = {
  count: 0
}

const countReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case actionTypes.SET_INCREMENT:
      return reducerIncrement(state, data)

    case actionTypes.SET_DECREMENT:
      return reducerDecrement(state, data)

    default:
      return state
  }
}

export default countReducer
