import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./myStyles.css"

const ConversationItem = ({props}) => {
  return (
    <div className='conversation-container'>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastmessage'>{props.lastMessage}</p>
      <p className='con-timeStamp'>{props.timeStamp}</p>

    </div>
  )
}

export default ConversationItem