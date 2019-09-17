import { applyMiddleware, createStore } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@/sagas'
import reducer from '@/reducer'

let store = null

const sagaMiddleware = createSagaMiddleware()

const createDevelopmentStore = () => {
  return createStore(
    reducer,
    applyMiddleware(sagaMiddleware, reduxLogger)
  )
}

const createProductionStore = () => {
  return createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )
}

export const getStore = () => {
  if (!store) {
    store = process.env.NODE_ENV === 'development'
      ? createDevelopmentStore()
      : createProductionStore()

    sagaMiddleware.run(rootSaga)
  }

  return store
}
