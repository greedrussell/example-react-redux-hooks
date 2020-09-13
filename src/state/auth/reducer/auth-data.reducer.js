export const reducerGetAuthData = (state, data) => {
  return {
    ...state,
    accessKey: data.accessKey,
    secretKey: data.secretKey,
    userName: data.userName,
    isAuth: data.isAuth,
    error: data.error
  }
}
