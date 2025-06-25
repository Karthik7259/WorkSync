import React, { useContext, useEffect, useState} from 'react'
import Login from './components/Auth/login'
import Employeedashboard from './components/Dashboard/employeedashboard'
import  Admindashboard from './components/Dashboard/Admindashboard'
import "/src/App.css"
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setuser] = useState(null)
   const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setUserData] =useContext(AuthContext)
   
  useEffect(()=>{
      const loggedInuser=localStorage.getItem('loggedInuser');
      if(loggedInuser){
        const userData=JSON.parse(loggedInuser)
         
         setuser(userData.role)
         setloggedInUserData(userData.data)
         
      }
  },[])
  

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setuser('admin')
      localStorage.setItem('loggedInuser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee=userData.find((e)=>email==e.email && e.password==password)
          if (employee){
     
      setuser('employee')
      setloggedInUserData(employee)
      localStorage.setItem('loggedInuser',JSON.stringify({role:'employee',data:employee}))
          
    }
     
    }else{
      alert("invalid credentials")
    }  
  }
 
 

 return (
  <>
  {!user ? <Login handleLogin={handleLogin}/>: ''}
   {user == 'admin'? <Admindashboard changeuser={setuser} />: (user =='employee' ? < Employeedashboard changeuser={setuser}  data={loggedInUserData} /> : null) } 
  </>
 )
  

}
export default App