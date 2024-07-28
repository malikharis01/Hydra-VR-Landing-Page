import React from 'react'

const Button = ({text}: {text:string}) => {
  return (
    <main>
        <button className='bg-gradient-to-b shadow-2xl tracking-widest from-p1 to-p2 px-10 py-4 rounded-[40px] text-xs font-semibold text-text1'>{text}</button>
    </main>
  )
}

export default Button