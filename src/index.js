import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Counter from './containers/Counter'
import configureStore from './configureStore'

const store = configureStore()

const RNDReduxExample = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

AppRegistry.registerComponent('RNDReduxExample', () => RNDReduxExample)
