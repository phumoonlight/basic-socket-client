import React from 'react'
import io from 'socket.io-client'

const useSocket = (url) => {
  const [socket, setSocket] = React.useState(null)

  React.useEffect(() => {
    const socketIo = io(url)
    socketIo.on('connect', function(){
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
  const [id, setId] = React.useState('...')
  const [value, setValue] = React.useState('')
  const [isSender, setIsSender] = React.useState(false)
  const socket = useSocket('https://basic-socket-server.herokuapp.com/')
  React.useEffect(() => {
    if (socket) {
      setId(socket.id)
      socket.on('broadcast', (data) => {
        setIsSender(false)
        console.log(data)
        if (!isSender) setValue(data)
      })
    }
  }, [socket])

  return (
    <div>
      <div>{id}</div>
      <input onChange={(e) => {
        setIsSender(true)
        if(socket) {
          socket.emit('cc', e.target.value)
          setValue(isSender ? e.target.value : value)
        }
      }} value={value} />
    </div>
  )
}

export default Index