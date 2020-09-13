import actionTypes from './actionTypes'
import { reducerGetAuthData } from './reducer/auth-data.reducer'

const initialState = {
  accessKey: '',
  secretKey: '',
  userName: '',
  isAuth: false,
  error: ''
}

const authReducer = (
  state = initialState,
  { type, data }
) => {
  switch (type) {
    case actionTypes.AUTH_REQUEST:
      return reducerGetAuthData(state, data)

    case actionTypes.AUTH_SUCCESS:
      return reducerGetAuthData(state, data)

    case actionTypes.AUTH_FAILED:
      return reducerGetAuthData(state, data)

    default:
      return state
  }
}

export default authReducer
