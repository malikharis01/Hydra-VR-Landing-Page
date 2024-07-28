import React from 'react'
import Image from 'next/image'
import used from "@/assets/Tech-Section.png"

const UsedBy = () => {
  return (
    <section className='mt-[100px] flex justify-center items-center'>
        <Image src={used} alt='used'></Image>
    </section>
  )
}

export default UsedBy