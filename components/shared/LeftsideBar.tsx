"use client"
import { sidebarLinks } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { OrganizationSwitcher, SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
import signupIcon from '@/public/assets/icons/sign-up.svg'
import loginIcon from '@/public/assets/icons/account.svg'
const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden mt-[68px] md:flex md:flex-col md:max-w-[25%] lg:w-[15%] h-screen bg-[#0f0f0f] fixed top-0 left-0 px-2">
      <section className="flex flex-col gap-6  mt-8">
        {sidebarLinks.map((item) => {
          const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
          return (
            <div key={item.route} className={`${isActive ? 'bg-orange-500' : 'px-2'} rounded-md px-2 py-2`}>
              <Link href={item.route} className="flex gap-4">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p className={`${isActive ? "font-semibold" : "font-normal"} md:hidden lg:block`}>{item.label}</p>
              </Link>
            </div>
          );
        })}
      </section>
      <SignedOut>
   

         <div className='flex flex-col gap-4 mt-9'>
            <Link href='/sign-in'>
    <Button className='bg-[#202020] text-orange-600 capitalize w-[90%] h-[48px] flex md:hidden lg:flex'>Log In</Button>
    <Image className='block md:block lg:hidden' src={loginIcon} alt='login icon' height={24} width={24} />  
    
    </Link>
    
   <Link href='/sign-up'>
    <Button className='bg-orange-500 text-white capitalize px-2 w-[90%] h-[48px] flex md:hidden lg:flex'>Sign up</Button>
    <Image className='block md:block lg:hidden' src={signupIcon} alt='signup icon' height={24} width={24} />  
    
    </Link>
         </div>
    
     

   </SignedOut>
    </div>
  );
};

export default LeftSideBar;
