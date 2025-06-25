import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './newTask'
import CompleteTask from './completeTask'
import Failedtask from './failedtask'
const TaskList = ({data}) => {
 
  
  return (
    <div id="tasklist" className='h-[50%] overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap w-full py-1  mt-16'>
   
    {data.tasks.map((elm,idx)=>{
      
      if(elm.active){
        return <AcceptTask key={idx} data={elm}/>
      }
      if(elm.newTask){
        return <NewTask  key={idx} data={elm} />
      }
      if(elm.completed){
        return <CompleteTask  key={idx} data={elm}/>
      }
      if(elm.failed){
        return <Failedtask  key={idx} data={elm}/>

      }
      
    })}
     
     
    </div>
  )
}

export default TaskList