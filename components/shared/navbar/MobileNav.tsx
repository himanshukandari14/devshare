"use client"
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Menu } from 'lucide-react'
import Link from 'next/link'

import { SignedOut } from '@clerk/nextjs'
import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { sidebarLinks } from '@/constant'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { isAbsolute } from 'path'
import { Button } from '@/components/ui/button'

// another component
const NavContent=()=>{
    const pathname=usePathname();
    
    return (
        <section className='flex flex-col gap-6 pt-16'>
  {sidebarLinks.map((item) =>{
    const isActive=(pathname.includes(item.route) && item.route.length >1 || pathname === item.route)
    return ( <SheetClose asChild key={item.label}>
      <div className={`${isActive?'bg-orange-500':' px-2 '} rounded-md px-2 py-2`} >
        <Link href={item.route} className='flex gap-4'>
          <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
          <p className={`${isActive?"font xl font-semibold":"font-xl"}`}>{item.label}</p>
        </Link>
        
      </div>
    </SheetClose>)
  } 
   
  )}
</section>

    )

}
const MobileNav = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <Menu className='text-2xl' />
  </SheetTrigger>
  <SheetContent side="left">
   
    <Link href='/'>
     <div className='text-2xl'>Dev <span className='text-orange-500 font-semibold text-2xl'>shares</span></div>
    </Link>
    <div>
   <NavContent />

   {/* if user is not signed in */}
   <SignedOut>
   
    <SheetClose asChild>
         <div className='flex flex-col gap-4 mt-9'>
            <Link href='/sign-in'>
    <Button className='bg-[#202020] text-orange-600 capitalize w-[250px] h-[48px]'>Log In</Button>
    
    </Link>
    
   <Link href='/sign-up'>
    <Button className='bg-orange-500 text-white capitalize px-2 w-[250px] h-[48px]'>Sign up</Button>
    
    </Link>
         </div>
    
     

   </SheetClose>
   </SignedOut>
   {/* if sign in then show logout btn */}
    <SignedIn>
        <Link href='/sign-up'>
    <Button className='bg-orange-500 text-white capitalize px-2 w-[250px] h-[48px]'>Sign up</Button>
    
    </Link>
    </SignedIn>
   
    </div>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav
