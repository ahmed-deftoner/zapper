import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import SuggestedAccounts from './SuggestedAccounts';
import Footer from './Footer';

const Sidebar = () => {
     const [showSidebar, setShowSidebar] = useState<Boolean>(true);

     const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center md:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

     const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center md:justify-start cursor-pointer font-semibold rounded';   

    return (
        <div>
              <div
                    className='block md:hidden m-2 ml-4 mt-3 text-xl'
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
                </div>
                {showSidebar && (
                    <div className='md:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 md:border-0 p-3 '>
                        <div className='md:border-b-2 border-gray-200 md:pb-4'>
                            <Link href='/'>
                            <div className={normalLink}>
                                <p className='text-2xl'>
                                <AiFillHome />
                                </p>
                                <span className='capitalize text-xl hidden md:block'>
                                For You
                                </span>
                            </div>
                            </Link>
                        </div>
                        <Discover/>
                        <SuggestedAccounts/>
                        <footer/>
                    </div>
             )}
        </div>
        
    )
}

export default Sidebar