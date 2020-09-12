export const reducerGetPhotos = (state, data) => {
  return {
    ...state,
    photos: data.photos
  }
}