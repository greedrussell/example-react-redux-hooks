import actionTypes from '../actionTypes'

export const actionGetPhotos = () => {
  return {
    type: actionTypes.GET_PHOTOS,
    data: {
      photos: ['photos']
    }
  }
} 