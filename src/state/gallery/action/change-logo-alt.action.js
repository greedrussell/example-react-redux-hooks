import actionTypes from '../actionTypes'

export const actionChangeLogoAlt = () => ({
  type: actionTypes.CHANGE_LOGO_ALT,
  data: {
    alt: 'React-redux App'
  }
})