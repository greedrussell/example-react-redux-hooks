import { combineReducers } from 'redux'

import authReducer from './auth/auth.reducer'
import galleryReducer from './gallery/gallery.reducer'
import countReducer from './count/count.reducer'

export default combineReducers({
  auth: authReducer,
  gallery: galleryReducer,
  count: countReducer
})