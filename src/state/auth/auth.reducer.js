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
    case actionTypes.LOG_IN_REQUEST:
      return reducerGetAuthData(state, data)

    case actionTypes.LOG_IN_SUCCESS:
      return reducerGetAuthData(state, data)

    case actionTypes.LOG_OUT_REQUEST:
      return reducerGetAuthData(state, data)

    case actionTypes.LOG_OUT_SUCCESS:
      return reducerGetAuthData(state, data)

    default:
      return state
  }
}

export default authReducer
