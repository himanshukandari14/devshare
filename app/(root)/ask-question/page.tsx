import Question from '@/components/forms/Question'
import { getUserId } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  // const {userId}= auth();
  const userId='123456'

  if(!userId) redirect('/sign-in');

  const mongoUser = await getUserId({userId});

  console.log(mongoUser);
  return (
    <div>
       <h1 className='bold text-3xl'>Ask a Question</h1>
      <div className='mt-9'>
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>

    </div>
  )
}

export default page
