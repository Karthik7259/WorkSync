import React,{useState} from 'react'

const NewTask = ({data}) => {
   

  
    // State to track the count of accepted tasks

    const [count, setCount] = useState(0);

    // Function to handle button click
    const handleAcceptTask = () => {
      setCount(prevCount => prevCount + 1);
    };
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#433878] rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
      <h4 className='text-sm'>{data.TaskDate}</h4>
    </div> 
     <h2 className='mt-5 text-2xl font-semibold'> {data.TaskTitle}</h2>
    <p className='text-sm mt-2'>{data.TaskDescription}</p>
    <div className='mt-6'>
        <button 
            onClick={handleAcceptTask}
        className='bg-red-950 py-1 px-2 text-sm'>Accept Task {count} </button>
    </div>
  </div>
  )
}

export default NewTask