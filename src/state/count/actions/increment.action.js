import actionTypes from '../actionTypes'

export const actionIncrement = count => {
  return {
    type: actionTypes.SET_INCREMENT,
    data: {
      count: count + 1
    }
  }
}