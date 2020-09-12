import { combineReducers } from 'redux'

import authReducer from './auth/auth.reducer'
import galleryReducer from './gallery/gallery.reducer'

export default combineReducers({
  auth: authReducer,
  gallery: galleryReducer
})