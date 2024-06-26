import QuestionCard from '@/components/cards/QuestionCard'
import HomeFilters from '@/components/home/HomeFilters'
import NoResult from '@/components/shared/NoResult'
import Filter from '@/components/shared/search/Filter'
import GlobalSearch from '@/components/shared/search/GlobalSearch'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constant/filters'
import { getQuestions } from '@/lib/actions/question.action'
import Link from 'next/link'
import React from 'react'


const page = async () => {

  // fetch questions from db
  const results= await getQuestions({});
  console.log(results)


  console.log(results);

  return (
    <div className=' '>
      <div className='w-full min-h-[58px] flex flex-col md:flex-row md:justify-between items-center px-4'>
  <h1 className='text-3xl font-semibold'>All Questions</h1>
  <Link href='/ask-question'>
   <Button className='bg-orange-500 hover:bg-orange-600 text-white mt-2 md:mt-0 md:ml-4'>Ask a Question</Button>
  </Link>
 
</div>
{/* search */}
<div className=' flex justify-between items-center '>
  <div>
<LocalSearchbar
  route='/'
  iconPosition='left'
  imgSrc='search'
  placeholder='search for questions'
  otherClasses='flex-1'
   />
  </div>
  
  <Filter
  filters={HomePageFilters}
  otherClasses="min-h-[56px] sm:min-w-[170px]"
  containerClass="hidden max-md:flex"
   />
</div>

{/* home filter wide screen */}
<HomeFilters />


{/* main posts */}
<div className='mt-10 flex w-full flex-col gap-6'></div>
    {/* looping through questions */}
    {results.questions.length > 0? results.questions.map((question)=>(
     <QuestionCard key={question._id} _id={question._id} title={question.title} tags={question.tags} author={question.author} upvotes={question.upvotes} views={question.upvotes} answers={question.answers} createdAt={question.createdAt} />
    ))
    : <NoResult title="There is no question to show" description="Be the first to break the silence, Ask a question and kickstart the discussion. Your query could be the  next big thing others can learn from "
    Link="/ask-question"
    LinkTitle="ask-question"
    />}
    
    </div>
  )
}

export default page
