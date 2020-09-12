import actionTypes from '../actionTypes'

export const actionGetCollection = () => {
  return {
    type: actionTypes.GET_COLLECTIONS,
    data: {
      collection: ['collection']
    }
  }
} 