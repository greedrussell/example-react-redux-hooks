import actionTypes from '../actionTypes'

export const actionAddMenuItem = (menu) => {
  const newId = menu[menu.length - 1].id + 1

  menu.push({
    id: newId,
    text: 'Keks'
  })

  return {
    type: actionTypes.ADD_MENU_ITEM,
    data: {
      menu
    }
  }
}