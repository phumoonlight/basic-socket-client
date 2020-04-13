import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MessageCard from '../src/components/MessageCard'
import useSocket from '../src/libs/useSocket'
import useSocketMessage from '../src/libs/useSocketMessage'
import css from '../src/styles/pages.module.css'

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
    <div className={css.root}>
      <Paper className={css.formContainer}>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.formBlock}>
            <TextField
              variant="filled"
              label="Username"
              name="username"
              size="small"
              className={css.formInput}
            />
          </div>
          <div className={css.formBlock}>
            <TextField
              variant="filled"
              label="What's on your mind"
              name="message"
              size="medium"
              className={css.formInput}
            />
          </div>
          <div className={css.formBlock}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              className={css.formInput}
            >
              POST
            </Button>
          </div>
        </form>
      </Paper>
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
      <Paper className={css.socketId}>
        {'Your ID : '}
        {socket && socket.id}
      </Paper>
    </div>
  )
}

export default Index
