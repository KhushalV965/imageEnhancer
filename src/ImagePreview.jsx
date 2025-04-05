import React from 'react'

function ImagePreview(props) {
  return (
    <div className='mt-8 h-[55vh] grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden ">
        <h2 className='text-xl font-semibold text-center bg-zinc-800 text-white'>Original Image</h2>
        {props.uploaded ? <img src={props.uploaded} alt="" className='w-full h-full object-center' /> : <div className="flex items-center justify-center h-full bg-zinc-200">
          No Image Selected
        </div>}


      </div>
      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden ">
        <h2 className='text-xl font-semibold text-center bg-blue-800 text-white'>Enhanced Image</h2>

        {props.enhanced ? <img src="" alt="" className='w-full h-full object-cover' />
          : <div className="flex items-center justify-center h-full bg-zinc-200">
            No Enhanced Image
          </div>}

      </div>
    </div>
  )
}

export default ImagePreview