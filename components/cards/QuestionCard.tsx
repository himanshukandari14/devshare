import Link from 'next/link';
import React from 'react'
import RenderTag from '../shared/RenderTag';
import Metric from '../shared/Metric';
import upvote from '@/public/assets/icons/upvote.svg'
import messageIcon from '@/public/assets/icons/message.svg'
import eye from '@/public/assets/icons/eye.svg'
import avatar from  '@/public/assets/icons/avatar.svg'
import { formatNumber, getTimeStamp } from '@/lib/utils';

interface QuestionProps {
    _id:string;
    title:string;
    tags:{
        _id:string;
        name:string;
    }[];
    views:number;
    answers: Array<object>;
    createdAt:Date;
    upvotes:number;
    author:{
        _id:string;
        name:string;
        picture:string;
        
    }
    showCount?:number;

}
const QuestionCard = ({_id,title,tags,author,upvotes,views,answers,createdAt}:QuestionProps) => {
  return (
    <div className='bg-[#303030] text-white py-4 px-4 min-h-[50px] mt-6 rounded-[10px]'>
        <div className='flex flex-col-reverse items-start gap-5 sm:flex-row'>
            <span className='text-gray-200 flex md:hidden'>{getTimeStamp(createdAt)}</span>
            <Link href={`questions/${_id}`} >
            <h3 className='font-semibold line-clamp-1'>{title}</h3>
            </Link>
        </div>
        {/* if signed in then show add,del, edit */}
        <div className='flex mt-4 gap-4'>
           {
            tags.map((tag)=>(
                <RenderTag  key={tag._id} _id={tag._id} name={tag.name} />
            ))
           }
        </div>
        <div className='flex justify-between flex-wrap gap-3 mt-5'>
             <div>
  <Metric 
           imgUrl={
            avatar
           }
           alt="avatar"
           value={author.name}
       
           title={` - asked ${getTimeStamp(createdAt)}`}
           textStyles="font-thin hidden md:flex"

            />
           </div>

           <div className='flex gap-3'>
              <Metric 
           imgUrl={
            upvote
           }
           alt="upvotes"
           value={formatNumber(upvotes)}
           href={'/'}
           title='votes'
           textStyles="font-semibold"

            />
         
            <Metric 
           imgUrl={
            eye
           }
           alt="views"
           value={views}
       
           title='views'
           textStyles="font-thin"

            />
              <Metric 
           imgUrl={
            messageIcon
           }
           alt=""
           value={answers.length}
       
           title='Answers'
           textStyles="font-thin"

            />
           </div>
           
          
          
        </div>

     
    </div>
  )
}

export default QuestionCard
