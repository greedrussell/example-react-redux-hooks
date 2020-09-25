import actionTypes from '../actionTypes'

export const actionRemoveMenuItem = (menu) => {
  const removeId = menu.length - 1

  return {
    type: actionTypes.REMOVE_MENU_ITEM,
    data: {
      removeId
    }
  }
}