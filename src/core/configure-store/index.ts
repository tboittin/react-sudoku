import reducer from 'reducers'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    devToolsEnhancer({})
  )
  const persistor = persistStore(store)
  return {store, persistor}
}

export default configureStore
