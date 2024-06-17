"use client"
import React from 'react'
import search from '@/public/assets/icons/search.svg'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
interface CustomInputProps{
  route:string;
  iconPosition:string;
  imgSrc:string;
  placeholder:string;
  otherClasses:string;



}
const LocalSearchbar = ({route,iconPosition,imgSrc,placeholder,otherClasses}:CustomInputProps) => {
  return (
    <div className={`w-full bg-[#E6E4E4] min-h-[56px] rounded-md flex items-center text-black ${otherClasses}`}>
      <Image src={search} alt='' width={24} height={24} />
      <Input
      className='bg-white no-focus outline-none'
      type='text'
      placeholder={placeholder}
      value={''}

      onChange={()=>{}}
     
       />
    </div>
  )
}

export default LocalSearchbar
