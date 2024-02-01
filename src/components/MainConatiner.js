import React from 'react'
import './myStyles.css'
import SideBar from './SideBar'
import ChatArea from './ChatArea'


const MainConatiner = () => {
  return (
    <div className='mainConatiner'>
        <SideBar/>
        <ChatArea/>
        
    </div>
  )
}

export default MainConatiner