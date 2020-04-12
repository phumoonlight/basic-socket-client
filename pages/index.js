import React from 'react'
import MessageCard from '../src/components/MessageCard'
import useSocket from '../src/libs/useSocket'
import useSocketMessage from '../src/libs/useSocketMessage'
import css from '../src/global.module.css'

const Index = () => {
  const socket = useSocket()
  const [messages, emitMessage] = useSocketMessage(socket)
  const handleSubmit = (event) => {
    event.preventDefault()
    const { target: { username, message } } = event
    emitMessage({ sender: username.value, message: message.value })
    message.value = ''
  }
  return (
    <div>
      <div>{socket && socket.id}</div>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="username..." />
        <input name="message" placeholder="message..." />
        <input type="submit" value="Send" />
      </form>
      <div className={css.message}>
        {messages.map((log) => (
          <MessageCard
            key={log.chatid}
            senderName={log.sender}
            senderSocketId={log.id}
            message={log.message}
          />
        ))}
      </div>
    </div>
  )
}

export default Index
