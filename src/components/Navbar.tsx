import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hydra from "@/assets/hydra.png"
import logo from "@/assets/logo.png"
import Button from './Buttons.tsx/Button'
import SecondaryButton from './Buttons.tsx/SecondaryButton'

const Navbar = () => {
  return (
    <header className='text-mywhite flex justify-between items-center pt-7'>
        <div className='flex justify-center items-center w-fit gap-[15px]'>
            <Image src={logo} alt='logo'></Image>
            <Image src={hydra} alt='hydra'></Image>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <Link href={"/"}>
                <div className='text-base font-medium'>About</div>
            </Link>
            <Link href={"/"}>
                <div className='text-base font-medium'>Services</div>
            </Link>
            <Link href={"/"}>
                <div className='text-base font-medium'>Technologies</div>
            </Link>
            <Link href={"/"}>
                <div className='text-base font-medium'>HOW TO</div>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <SecondaryButton text="CONTACT US"></SecondaryButton>
            <Button text='JOIN HYDRA'></Button>
        </div>
    </header>
  )
}

export default Navbar