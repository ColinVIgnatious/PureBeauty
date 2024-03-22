import React from 'react'
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <div className='bg-[#842A3A] flex justify-between pr-[60px] pl-[40px]'>
        <Image className=" mt-[70px] " src="/Logo+Brand.svg" alt="My image" width={199} height={49}/>
        <div className=' flex justify-between space-x-[40px]'>
          <div>
            <div className={`text-[#FDF2DB] text-sm mt-[70px] ${sourceCodePro.className}`}>ADDRESS</div>
            <div className={`text-[#FDF2DB] text-sm mt-[25px] ${sourceCodePro.className}`}>13 Brinkley Circuit Palmerston</div>
          </div>
          <div>
            <div className={`text-[#FDF2DB] text-sm mt-[70px] ${sourceCodePro.className}`}>SOCIAL MEDIA</div>
            <div className='flex justify-between mt-[25px]'>
            <Image className=" " src="/instalogo.png" alt="My image" width={24} height={24}/>
            <Image className=" " src="/fblogo.png" alt="My image" width={24} height={24}/>
            </div>
          </div>
        </div>
    </div>
    <div className='bg-[#842A3A] flex justify-between pr-[40px] pl-[40px] pb-[80px]'>
      <div className='flex'>
        <div className={`text-[#FDF2DB] text-sm mt-[70px] ${sourceCodePro.className}`}>© 2022 PURE BEAUTY. POWERED BY</div>
        <Image className=" mt-[70px] ml-[10px] " src="/planetmedia.svg" alt="My image" width={88} height={15}/>
      </div>
      <div className={`text-[#FDF2DB] text-sm mt-[70px] ${sourceCodePro.className}`}>ALL RIGHTS RESERVED.</div>
    </div>
    </>
  )
}

export default Footer