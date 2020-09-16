import actionTypes from '../actionTypes'

export const actionLogIn = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOG_IN_REQUEST,
      data: {
        accessKey: '',
        secretKey: '',
        userName: '',
        isAuth: false,
        error: ''
      }
    })

    setTimeout(() => {
      dispatch({
        type: actionTypes.LOG_IN_SUCCESS,
        data: {
          accessKey: 'NzA_tml92PNCepUu_XDRTSRfVft6L-qKovu9mKB8eas',
          secretKey: 'GmVca_MJuuMXf7mxRhnrTKdmVQ6UuTx15UdOa3JKG_w',
          userName: 'Russell Greed',
          isAuth: true,
          error: ''
        }
      })
    }, 2000)
  }
}
