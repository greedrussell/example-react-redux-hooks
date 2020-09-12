import actionTypes from './actionTypes'
import { reducerGetAuthData } from './reducer/get-auth-data.reducer'

const initialState = {
  accessKey: '',
  secretKey: ''
}

const authReducer = (
  state = initialState,
  { type, data }
) => {
  switch (type) {
    case actionTypes.GET_AUTH_DATA:
      return reducerGetAuthData(state, data)

    default:
      return state
  }
}

export default authReducer
