import React, { useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';


import SidebarMobile from  "./SidebarMobile"
import Navbar from './Navbar';



function Header() {

  const [isMobile, setisMobile] = useState(false)
  return (
    <div className="flex-1 w-full sticky-0 items-center justify-center  text-white bg-red-900">

<div className=" flex justify-between h-[70px] bg-black items-center w-full px-0 relative ">
        <div onClick={()=>setisMobile(!isMobile)} className="flex items-center space-x-12 ">

        {
        isMobile ? (

          <BiRightArrow className="w-6 md:hidden h-6 cursor-pointer hover:text-blue-500"/>
        ):(

          <BiLeftArrow className="w-6 h-6 md:hidden cursor-pointer hover:text-blue-500"/>
        )}

        <p className="text-center  md:hidden">{'data.user?.displayName'}</p>

        </div>

      

        <Navbar/>
     


          <SidebarMobile isMobile={isMobile}/>
    
        
        {/* } */}

      </div>
    </div>
  )
}

export default Header