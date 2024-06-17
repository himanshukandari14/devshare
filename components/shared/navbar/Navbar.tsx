import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import MobileNav from './MobileNav'
import GlobalSearch from '../search/GlobalSearch'

const Navbar = () => {
  return (
    <div className='bg-[#0F0F0F] fixed h-[68px] flex items-center justify-between w-full px-10 text-white'>
  <div className='text-2xl hidden md:flex'>
    Dev <span className='text-orange-500 font-semibold text-2xl'>shares</span>
  </div>
  {/* global search */}
  <div className='hidden md:flex'>
    <GlobalSearch />
  </div>
  <div>
    <SignedIn>
      <div className='justify-center items-center hidden md:flex'>
        <UserButton appearance={{
          elements: {
            avatarBox: 'h-10 w-10'
          },
          variables: {
            colorPrimary: '#ff7000'
          }
        }} />
        <SignOutButton />
      </div>
    </SignedIn>
  </div>
  <div className='flex md:hidden'>
    <MobileNav />
  </div>
</div>

    
    
  )
}

export default Navbar
