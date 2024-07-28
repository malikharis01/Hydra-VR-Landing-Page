import React from 'react'
import Image from 'next/image'
import option from "@/assets/OptIn-Section.png"


const Options = () => {
  return (
    <section className='mt-[100px] flex justify-center items-center'>
        <Image src={option} alt='option'></Image>
    </section>
  )
}

export default Options