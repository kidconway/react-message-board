import React from 'react'
import { useAppContext } from './hooks'
import CreateReaction from './create-reaction'
import MessageReactions from './message-reactions'


function MessageBoard(){
  const { state: { messages, reactionsMap } } = useAppContext()

  return (
    <div className='row'>
      <h3>"mEsSagE bOarD"</h3>
      {
        messages.map(messageItem => {
          const { id, username, text, createdAt } = messageItem

          return (
            <div key={id} className='component'>
              <div className="row">
                <h4>Author: { username }</h4>
                <p>{ text }</p>
                <p><small>{new Date(createdAt).toLocaleString()}</small></p>
                <CreateReaction messageId={ id } />
                <MessageReactions messageReactions={ reactionsMap[id] } />
              </div>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
}
export default MessageBoard
