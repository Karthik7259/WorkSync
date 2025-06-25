import React from 'react'
import Header from '../other/header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'
const Admindashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
         <Header changeuser={props.changeuser}/>
         <Createtask/>
        <Alltask/>
    </div>
  )
}

export default Admindashboard