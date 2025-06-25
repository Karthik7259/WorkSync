import React,{createContext,useEffect, useState} from 'react'

import { getLocalstorage, setLocalstorage } from '../utils/localStorage';



export const AuthContext = createContext();




const AuthProvider = ({children}) => {   
          // localStorage.clear()
    const [userData, setuserData] = useState(null)
 
    
   useEffect(() => {

    setLocalstorage()
    const {employees}=getLocalstorage()
    setuserData(employees)
   }, [])
   

    
  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
         {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider