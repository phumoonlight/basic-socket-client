import React from 'react'
import PropTypes from 'prop-types'

const MessageCard = ({ senderName, senderSocketId, message }) => (
  <div style={{ border: 'solid black 1px' }}>
    <div>
      {senderName}
      {`(${senderSocketId})`}
    </div>
    <div>
      {`: ${message}`}
    </div>
  </div>
)

MessageCard.propTypes = {
  senderName: PropTypes.string.isRequired,
  senderSocketId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default MessageCard
