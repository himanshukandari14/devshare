import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';
import arrow from '@/public/assets/icons/chevron-right.svg'
import React from 'react';
import RenderTag from './RenderTag';

const RightSidebar = () => {
  const hotQues=[
    {_id: "1",title:'lorem hash ojsdj s[ jsdjs;a '},
    {_id: "2",title:'lorem hash ojsdj s[ jsdjs;a '},
    {_id: "1",title:'lorem hash ojsdj s[ jsdjs;a '},
    {_id: "1",title:'lorem hash ojsdj s[ jsdjs;a '},
  ]
  const popularTags=[
    {_id: "1",title:'javascript',totalQues:6},
    {_id: "2",title:'vue',totalQues:45},
    {_id: "1",title:'python',totalQues:16},
    {_id: "1",title:'react',totalQues:65},
  ]
  return (
    <section className="hidden md:flex md:flex-col md:max-w-[25%] lg:w-[15%] h-screen bg-[#0F0F0F] fixed top-0 right-0 mt-[68px] px-2 ">
     <div className='mt-8'>
        <h3 className='bold text-2xl'>Top Questions</h3>
        <div className='mt-7 flex flex-col gap-[30px]'>
          {
            hotQues.map((ques)=>{ return(
              <Link className='flex justify-between items-center' href={`/questions/${ques._id}`} key={ques._id}>
                <p>{ques.title}</p>
                <Image src={arrow} alt='arrrow' height={20} width={20} />
              </Link>
            )})
          }
        </div>
     </div>
     <div className='mt-24'>
    <h3 className='bold text-xl'>Popular Tags</h3>
    <div className='mt-7 flex flex-col gap-4'>
      {popularTags.map((tag)=>(
        <RenderTag key={tag._id} _id={tag._id} name={tag.title} totalQuestions={tag.totalQues} showCount />
      ))}
      
    </div>
     </div>
    </section>
  );
}

export default RightSidebar;
