import update from 'immutability-helper'

export const reducerRemoveMenuItem = (state, data) => {
  return update(state, {
    menu: { $splice: [[data.removeId, 1]] }
  })
}