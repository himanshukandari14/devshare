
import LeftsideBar from '@/components/shared/LeftsideBar'
import Navbar from '@/components/shared/navbar/Navbar'
import RightSidebar from '@/components/shared/RightSidebar'
import React from 'react'

const Layout = ({children}:{ children: React.ReactNode}) => {
  return (
    <main className='bg-[#000000] relative'>
        <Navbar />
        <div className='flex'>
            <LeftsideBar />
           <div className='main md:ml-[15%] md:mr-[15%] mt-[68px] min-h-screen w-full px-[10%]'>
        {children}
</div>
           
            <RightSidebar />
        </div>
    
        Toaster
    </main>
  )
}

export default Layout
