import React from 'react'

const useSocketMessage = (socket) => {
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    if (socket) {
      socket.on('broadcast', (broadcastMessages) => {
        setMessages(broadcastMessages)
      })
    }
  }, [socket])

  const emitMessage = (payload) => {
    if (socket) {
      socket.emit('cc', {
        id: socket.id,
        sender: payload.sender,
        message: payload.message,
      })
    }
  }

  return [messages, emitMessage]
}

export default useSocketMessage
