import Link from 'next/link';
import React from 'react'
import { Badge } from '../ui/badge';

interface Props{
    _id:string;
    name:string;
    totalQuestions?:number;
    showCount?:boolean;
}

const RenderTag = ({_id,name,totalQuestions,showCount}:Props) => {
  return (
    <Link href={`/tags/${_id}`} className='flex justify-between gap-2'>
        <Badge className='px-3 py-1 bg-[#e7e7e7] text-black uppercase' >
            <h1 className='text-[#757575]'>{name}</h1>
           
        </Badge>
         {showCount && (
                <p className='text-sm'>{totalQuestions}</p>
            )}

      
    </Link>
  )
}

export default RenderTag
