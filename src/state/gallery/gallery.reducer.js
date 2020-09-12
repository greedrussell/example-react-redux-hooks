import actionTypes from './actionTypes'
import { reducerGetPhotos } from './reducer/get-photos.reducer'
import { reducerGetCollection } from './reducer/get-collection.reducer'

const initialState = {
  photos: [''],
  collection: ['']
}

const galleryReducer = (
  state = initialState,
  { type, data }
) => {
  switch (type) {
    case actionTypes.GET_PHOTOS:
      return reducerGetPhotos(state, data)

    case actionTypes.GET_COLLECION:
      return reducerGetCollection(state, data)

    default:
      return state
  }
}

export default galleryReducer
