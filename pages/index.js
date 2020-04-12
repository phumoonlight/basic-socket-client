import React from 'react'
import io from 'socket.io-client'

const useSocket = (url) => {
  const [socket, setSocket] = React.useState(null)

  React.useEffect(() => {
    const socketIo = io(url)
    socketIo.on('connect', function () {
      console.log('connected', socketIo.id)
    })

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup
  }, [])

  return socket
}

const Index = () => {
  const [chatLogs, setChatLogs] = React.useState([])
  const socket = useSocket(process.env.HOST_SERVER)
  React.useEffect(() => {
    if (socket) {
      socket.on('broadcast', (log) => {
        setChatLogs(log)
      })
    }
  }, [socket])

  return (
    <div>
      <div>{socket && socket.id}</div>
      <form onSubmit={(e) => {
        e.preventDefault()
        const sender = e.target.user.value
        const message = e.target.chat.value
        if (socket) socket.emit('cc', {
          sender,
          id: socket.id,
          message,
        })
        console.log(e.target.chat.value)
        e.target.chat.value = ''
      }}>
        <input name="user" placeholder="name" />
        <input name="chat" placeholder="message" />
        <input type="submit" value="Send" />
      </form>
      {chatLogs.map(log => (
        <div style={{border: 'solid black 1px'}} key={log.chatid}>
          <div>{log.sender} ({log.id})</div>
          <div> : {log.message}</div>
        </div>
      ))}
    </div>
  )
}

export default Index