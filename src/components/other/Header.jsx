import React, {useEffect, useState } from 'react'
import { setLocalstorage } from '../../utils/localStorage'



const Header = (props) => {

          const [username, setusername] = useState('')

 
          useEffect(() => {
            // Retrieve the username from local storage
            const storedData = JSON.parse(localStorage.getItem('loggedInuser'));
            if (storedData && storedData.data && storedData.data.firstName) {
              setusername(storedData.data.firstName);
            } else {
              setusername('Admin'); // Default if no user is found
            }
          }, []);

const logOutUser=()=>{
  localStorage.setItem('loggedInuser','')
    props.changeuser('')
   
   
  // window.location.reload()
}



  return (

  <div className=' flex  items-end justify-between'>
      
        <h1  className='text-2xl font-medium'>
        Hello <br/> 
      <span className='text-3xl font-semibold'>{username ? username : 'User'}👋🏻</span>
      </h1>
      
   
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
      
    </div>
  )
}

export default Header