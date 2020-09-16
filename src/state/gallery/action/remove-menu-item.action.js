import actionTypes from '../actionTypes'

export const actionRemoveMenuItem = (menu) => {
  menu.pop()

  return {
    type: actionTypes.REMOVE_MENU_ITEM,
    data: {
      menu
    }
  }
}