import React from 'react'

function Loading() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className="border-6 border-red-500 w-[5vmax] h-[5vmax] rounded-full border-t-transparent animate-spin"></div>
    </div>
  )
}

export default Loading