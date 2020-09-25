import update from 'immutability-helper';

export const reducerAddMenuItem = (state, data) => {
  return update(state, {
    menu: { $push: [data.menuItem] }
  });
}