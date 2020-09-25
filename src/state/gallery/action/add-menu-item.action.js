import actionTypes from '../actionTypes'

export const actionAddMenuItem = (menu) => {
  const newId = menu[menu.length - 1].id + 1
  const menuItem = {
    id: newId,
    text: 'Keks'
  }

  return {
    type: actionTypes.ADD_MENU_ITEM,
    data: {
      menuItem
    }
  }
}