import React, { useState } from 'react'
import { useAppContext } from './hooks'
import { newMessage } from '../state/actions'


function PublishMessage(){
  const { state: { username }, pubsub: { publish } } = useAppContext()
  const [ text, setText ] = useState('')

  const updateText = event => {
    setText(event.target.value)
  }
  const publishMessage = () => {
    publish(newMessage({text, username}))
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') publishMessage()
  }

  return (
    <div className='row bg-warning pb-3 component'>
      <h3>Enter your message</h3>
      <input type="text"
        value={text}
        onChange={ updateText }
        onKeyPress={ handleKeyPress }
      />
      <button onClick={ publishMessage }>Submit</button>
    </div>
  )
}

export default PublishMessage
