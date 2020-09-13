export const reducerIncrement = (state, data) => {
  return {
    ...state,
    count: data.count
  }
}