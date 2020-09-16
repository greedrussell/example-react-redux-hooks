import actionTypes from './actionTypes'
import { reducerGetPhotos } from './reducer/get-photos.reducer'
import { reducerGetCollection } from './reducer/get-collection.reducer'
import { reducerChangeLogoAlt } from './reducer/change-logo-alt.reducer'
import { reducerResetLogoAlt } from './reducer/reset-logo-alt.reducer'
import { reducerAddMenuItem } from './reducer/add-menu-item.reducer'
import { reducerRemoveMenuItem } from './reducer/remove-menu-item.reducer'

const initialState = {
  photos: [''],
  collection: [''],
  alt: 'React App',
  menu: [
    {
      id: 1,
      text: 'Fuck Home',
    },
    {
      id: 2,
      text: 'About',
    },
    {
      id: 3,
      text: 'Contact',
    },
    {
      id: 4,
      text: 'Catalog',
    },
  ]
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

    // example code below
    case actionTypes.CHANGE_LOGO_ALT:
      return reducerChangeLogoAlt(state, data)

    case actionTypes.RESET_LOGO_ALT:
      return reducerResetLogoAlt(state, data)

    case actionTypes.ADD_MENU_ITEM:
      return reducerAddMenuItem(state, data)

    case actionTypes.REMOVE_MENU_ITEM:
      return reducerRemoveMenuItem(state, data)

    default:
      return state
  }
}

export default galleryReducer
