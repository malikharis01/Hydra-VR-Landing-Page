import React from 'react'

const SecondaryButton = ({text}: {text:string}) => {
  return (
    <main>
        <button className='px-10 py-4 rounded-[40px] text-xs font-semibold text-mywhite border-2'>{text}</button>
    </main>
  )
}

export default SecondaryButton