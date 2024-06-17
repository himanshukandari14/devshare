import Image from 'next/image'
import React from 'react'
import searchIcon from '@/public/assets/icons/search.svg'
import { Input } from '../../ui/input'

const GlobalSearch = () => {
  return (
    <div className='w-[550px] h-[50px] rounded-lg bg-[#e6e4e4] flex items-center px-2 gap-4'>
      <Image src={searchIcon} alt='search icon' height={24} width={24} className='cursor-pointer' />
      <Input type='text' placeholder='search' className='bg-[white] border-none shadow-none' />
    </div>
  )
}

export default GlobalSearch
