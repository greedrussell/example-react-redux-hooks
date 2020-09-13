export const reducerDecrement = (state, data) => {
  return {
    ...state,
    count: data.count
  }
}