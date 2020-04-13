import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import css from './MessageCard.module.css'

const MessageCard = ({ senderName, senderSocketId, message }) => (
  <Paper elevation={1} className={css.container}>
    <div className={css.socketId}>
      {`@${senderSocketId}`}
    </div>
    <div>
      {senderName}
    </div>
    <div>
      {`: ${message}`}
    </div>
  </Paper>
)

MessageCard.propTypes = {
  senderName: PropTypes.string.isRequired,
  senderSocketId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default MessageCard
