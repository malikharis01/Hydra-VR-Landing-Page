import React from 'react'
import Image from 'next/image'
import footer from "@/assets/Footer-Section.png"

const Footer = () => {
  return (
    <section className='mt-[100px] flex justify-center items-center'>
        <Image src={footer} alt='footer'></Image>
    </section>
  )
}

export default Footer