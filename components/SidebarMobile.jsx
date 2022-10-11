import React from 'react'
import Navbar from './Navbar'
import {authentication} from "../firebase"
import { useRouter } from 'next/router'


function Sidebar({isMobile}) {
  const auth = authentication;
  const router = useRouter()
  return (
    <div className={`sidebar h-[675px]l h-screen  flex-col space-y-44  
    md:flexx w-[350px]  md:hidden border-r-2 border-red-900k 
    bg-black text-white absolute top-[70px] left-0 z-10 transition transform ${isMobile && `-translate-x-[100%]`} ease-out duration-700 `}>
     {/* <Navbar/> */}




      <div className="flex w-full items-center justify-center">
      <p className="text-xs">Bal: Ghc {1234.10}</p>
      </div>

      <div className="flex flex-col space-y-4 mx-4 ">
        <p onClick={()=>router.push("/gamemenu")} className=" transition duration-200 text-md border p-1.5 rounded-lg text-center cursor-pointer hover:bg-green-400">Game Menu</p>
        <p onClick={()=>router.push("/payment")} className=" transition duration-200 text-md border p-1.5 rounded-lg text-center cursor-pointer hover:bg-red-400">Payment</p>
        <p onClick={()=>router.push("/gameSlip")} className=" transition duration-200 text-md border p-1.5 rounded-lg text-center cursor-pointer hover:bg-orange-400">Game Slip</p>

      </div> 




      <div className=" flex flex-col w-full space-y-2 text-sm items-center p-2">
        <span className="text-xs border w-44 rounded-lg p-2">🇳🇬 +2330245567890</span>
        <button onClick={()=>auth.signOut()} className=" transition duration-200 w-44 bg-transparent hover:bg-red-500 text-white text-xs font-semiboldx hover:text-white  px-3 border border-white hover:border-transparent rounded-lg p-2">LogOut</button>
      </div>

    
    
    </div>
  )
}

export default Sidebar
