import actionTypes from '../actionTypes'

export const actionDecrement = count => {
  return {
    type: actionTypes.SET_DECREMENT,
    data: {
      count: count - 1
    }
  }
}