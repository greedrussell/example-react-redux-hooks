import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';



export const ping = store => next => action => {
  console.log('ping - ', action)
  return next(action)
}

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    ping,
  )
))

export default store