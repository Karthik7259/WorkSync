import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex  mt-10 justify-between gap-5 screen '>
        <div className=' rounded-xl py-6 px-9 w-[45%] bg-red-400'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl py-6 px-9 w-[45%] bg-[#CDC1FF]'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>completed Task</h3>
        </div>
        <div className=' rounded-xl py-6 px-9 w-[45%] bg-[#FFA24C]'>
            <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
        </div>
        <div className=' rounded-xl py-6 px-9 w-[45%] bg-[#C4E1F6]'>
            <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers