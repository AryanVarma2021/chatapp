import React from 'react'
import './myStyles.css'
import SideBar from './SideBar'
import ChatArea from './ChatArea'


const MainConatiner = () => {
  const temp = {
    name : "Test1",
    lastMessage : "Last Message #1",
    timeStamp : "today"
}
  return (
    <div className='mainConatiner'>
        <SideBar/>
        <ChatArea props={temp}/>
        
    </div>
  )
}

export default MainConatiner