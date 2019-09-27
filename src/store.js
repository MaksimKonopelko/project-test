import { applyMiddleware, createStore } from 'redux'
import reducer from '@/reducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = null

const createDevelopmentStore = () => {
  return createStore(
    reducer, composeWithDevTools(applyMiddleware(thunk))
  )
}

export const getStore = () => {
  if (!store) {
    store = createDevelopmentStore()
  }

  return store
}
