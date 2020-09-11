import React from 'react'
import './App.css'
import Age from './Age'
import Greating from './Greating'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Component App.js</p>
        <Greating name={'John'}/>
        <Age />
      </div>
    </Provider>
  )
}

export default App
