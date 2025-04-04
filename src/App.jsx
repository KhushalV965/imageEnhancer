import React from 'react'
import Home from './Home';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-200 px-8 py-4'>
      <div className="text-center mb-8">
        <h1 className='text-5xl text-zinc-700 font-bold mb-1'>AI Image Enhancer</h1>
        <p className='text-lg text-zinc-700'>
          Upload your image and let AI enhance to in seconds!
        </p>
      </div>
      <Home/>
      <div className="text-lg text-zinc-700 mt-10">
      Powered By @KhushalAI
      </div>
    </div>
  )
}

export default App;