"use client"
import { HomePageFilters } from '@/constant/filters'
import React from 'react'
import { Button } from '../ui/button'

const HomeFilters = () => {
    const isActive= 'newest';
  return (
    <div className='mt-10 flex-wrap flex justify-center gap-3'>
        {HomePageFilters.map((item)=>(
            <Button key={item.value} className={`rounded-lg shadow-none ${isActive ===item.value?'bg-orange-500':'bg-slate-400 hover:bg-yellow-100'}`} onClick={()=>{}}>
                {item.name}
            </Button>
        ))}
      
    </div>
  )
}

export default HomeFilters
