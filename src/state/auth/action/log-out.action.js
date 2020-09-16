import actionTypes from '../actionTypes'

export const actionLogOut = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.LOG_OUT_REQUEST,
      data: {
        accessKey: 'NzA_tml92PNCepUu_XDRTSRfVft6L-qKovu9mKB8eas',
        secretKey: 'GmVca_MJuuMXf7mxRhnrTKdmVQ6UuTx15UdOa3JKG_w',
        userName: 'Russell Greed',
        isAuth: true,
        error: ''
      }
    })

    setTimeout(() => {
      dispatch({
        type: actionTypes.LOG_OUT_SUCCESS,
        data: {
          accessKey: '',
          secretKey: '',
          userName: '',
          isAuth: false,
          error: ''
        }
      })
    }, 2000)
  }
}
