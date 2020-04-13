import React from 'react'
import io from 'socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = React.useState(null)

  React.useEffect(() => {
    const connectedSocket = io(process.env.HOST_SERVER)
    setSocket(connectedSocket)
    return () => connectedSocket.disconnect()
  }, [])

  return socket
}

export default useSocket
