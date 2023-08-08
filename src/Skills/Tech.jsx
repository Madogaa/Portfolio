import React from 'react'


function Tech({logo: LogoComponent,title}) {
  return (
    <div className='text-center'>
    <div className='cursor-pointer p-3 mb-2 bg-slate-950 w-fit rounded-full shadow-lg shadow-black flex'>
        <LogoComponent color='white' size={64} />
    </div>
    <p className='font-semibold'>{title}</p>
    </div>
  )
}

export default Tech