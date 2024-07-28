import React from 'react'
import Image from 'next/image'
import v1 from "@/assets/vectors/Vector 1.png"
import v2 from "@/assets/vectors/Vector 2.png"
import v3 from "@/assets/vectors/Vector 3.png"
import v4 from "@/assets/vectors/Vector 4.png"
import v7 from "@/assets/vectors/Vector 7.png"
import v8 from "@/assets/vectors/Vector 8.png"
import v14 from "@/assets/vectors/Vector 14.png"
import v15 from "@/assets/vectors/Vector 15.png"
import v18 from "@/assets/vectors/Vector 18.png"
import v19 from "@/assets/vectors/Vector 19.png"

const Vectors = () => {
  return (
    <main className='-z-50 overflow-hidden'>
        <Image src={v1} alt="v1" className='absolute top-[170px] right-0 -z-50'></Image>
        <Image src={v2} alt="v2" className='absolute top-0 right-[134px] -z-50'></Image>
        <Image src={v3} alt="v3" className='absolute top-[419px] right-0 -z-50'></Image>
        <Image src={v4} alt="v4" className='absolute top-[274px] left-0 -z-50'></Image>
        <Image src={v7} alt="v4" className='absolute top-[1000px] -z-50'></Image>
        <Image src={v8} alt="v4" className='absolute top-[1300px] -z-50'></Image>
        <Image src={v14} alt="v4" className='absolute top-[1900px] -z-50'></Image>
        <Image src={v15} alt="v4" className='absolute top-[3200px] right-10 -z-50'></Image>
        <Image src={v18} alt="v4" className='absolute top-[4650px] -z-50'></Image>
        <Image src={v19} alt="v4" className='absolute top-[4400px] -z-50'></Image>
    </main>
  )
}

export default Vectors