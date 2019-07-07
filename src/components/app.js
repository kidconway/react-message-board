import React, { useReducer, useEffect } from 'react';
import reducer, { initialState } from '../state/reducer'
import Context from '../context'

import PubSub from '../pubsub'
import PublishMessage from './publish-message'
import MessageBoard from './message-board'
import SetUsername from './set-username'

const pubsub = new PubSub()

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  useEffect( () => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject

        dispatch(message)
      }
    })
  }, [])

  console.log('state', state)
    return (
    <div className="container">
      <Context.Provider value={{ state, dispatch, pubsub }}>
        <h2 className='row'>Reaction, like Chernobyl</h2>
        <SetUsername />
        <PublishMessage />
        <hr/>
        <MessageBoard />
      </Context.Provider>
    </div>
  )
}

export default App;
