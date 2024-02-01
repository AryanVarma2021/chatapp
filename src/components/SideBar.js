import React, { useState } from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import NightlightIcon from '@mui/icons-material/Nightlight';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';
const SideBar = () => {
    const [conversation, setConversation] = useState([
        {
            name : "Test1",
            lastMessage : "Last Message #1",
            timeStamp : "today"
        },
        {
            name : "Test2",
            lastMessage : "Last Message #2",
            timeStamp : "yesterday"
        },
        {
            name : "Test3",
            lastMessage : "Last Message #3",
            timeStamp : "friday"
        }
    ])
  return (
    <div className='sideBarConatiner'>
        
        <div className='sb-header'>
            <div>
            <IconButton>
            <AccountCircleIcon/>
            </IconButton>
            </div>
            <div>
            <IconButton>
            <PersonAddIcon/>
            </IconButton>
            <IconButton>
                <GroupAddIcon/>
            </IconButton>
            <IconButton>
                <AddCircleIcon/>
            </IconButton>
            <IconButton>
                <NightlightIcon/>
            </IconButton>
            </div>
        </div>
        <div className='sb-search'>
            <IconButton>
            <SearchIcon/>
            </IconButton>
            <input type='text' placeholder='Search'>
                
            </input>
        </div>
        <div className='sb-conversation'>
            {conversation.map((item)=>(
                <ConversationItem key={conversation.name} props={item}   />
            ))}
        </div>
    </div>
  )
}

export default SideBar