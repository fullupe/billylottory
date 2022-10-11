import React from 'react';
//import { authentication } from '../../firebase'

import {authentication} from "../firebase"
import { useRouter } from 'next/router'


function Navbar() {
  const auth = authentication;
  const router = useRouter()
  return (
    <div className=" flexx h-70px] bg-gray-900 w-full  items-center p-2 justify-center   hidden md:inline-flex w-ful">

      <div className="flex w-full md:w-[80%] justify-between items-center">

      <div>
      {/* <span className="text-sm">BillyChat</span> */}
      <p className="text-xs">Bal: Ghc {1234.10}</p>
      </div>

      <div className="flex space-x-3 ">
        <p onClick={()=>router.push("/gamemenu")} className="transition duration-200 text-md border p-1.5 rounded-lg cursor-pointer hover:bg-green-400">Game Menu</p>
        <p onClick={()=>router.push("/payment")} className= " transition duration-200 text-md border p-1.5 rounded-lg cursor-pointer hover:bg-red-400">Payment</p>
        <p onClick={()=>router.push("/gameSlip")} className=" transition duration-200 text-md border p-1.5 rounded-lg cursor-pointer hover:bg-orange-400">Game Slip</p>

      </div>

      <div className=" flex space-x-2 text-sm items-center p-2">
        {/* <img className=" w-[24px] h-[24px] rounded-full object-cover" src={null} alt="" /> */}
        <span className="text-xs border rounded-lg p-2">🇳🇬 +2330245567890</span>
        <button onClick={()=>auth.signOut()} className="bg-transparent hover:bg-red-500 text-white text-xs font-semiboldx hover:text-white  px-3 border border-white hover:border-transparent rounded-lg p-2">LogOut</button>
      </div>

      </div>
    </div>
  )
}

export default Navbar
