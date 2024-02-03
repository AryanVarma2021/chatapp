import React from 'react'

const MessageSelf = () => {
    var props2 = {
        name : "You",
        message : "Hello"
    }
  return (
    <div className='self-message-container'>
        <div className='messageBox'>
            <p>{props2.message}</p>
            <p className='con-timeStamp'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf