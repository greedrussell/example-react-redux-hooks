export const reducerGetCollection = (state, data) => {
  return {
    ...state,
    collection: data.collection
  }
}