import React from 'react'
import noResultIllustration from '@/public/assets/images/light-illustration.png'
import Image from 'next/image'
import { Button } from '../ui/button'

interface Props {
    title:string;
    description:string;
    Link:string;
    LinkTitle:string;
}


const NoResult = ({title,description,Link,LinkTitle}:Props) => {
  return (
    <div className='mt-10 flex w-full flex-col items-center justify-center gap-6'>
      <Image
      src={noResultIllustration}
      alt='no result illustration'
      width={270}
      height={200}
      className='block object-contain'
       />
       <h2 className='text-3xl font-bold'>{title}</h2>
       <p className='font-light text-center max-w-md text-gray-300'>{description} </p>
       <Button className='min-h-[46px] rounded-lg bg-orange-500 '> 
        {LinkTitle}
       </Button>
    </div>
  )
}

export default NoResult
