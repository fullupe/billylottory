import React from 'react'

const addZerro = (num)=>{
    if(num < 10){
      return `0${num}`
    }else{
      return num
    }
  }

  

function Ticket({ticketbet}) {
  return (
    <div className="flex flex-col h-24 md:h-40  w-44 bg-white shadow-2xl m-2 rounded-lg p-1 md:w-40 py-2  ">

        <div className="flex-1 flex justify-center">
       <p key={null}  className=" flex border-spacing-4 border-2 border-green-500 text-white items-center justify-center  text-center rounded-full  w-6 h-6 text-xs mx-1 bg-black">{addZerro(ticketbet.bet1)}</p>
       <p key={null}  className=" flex border-spacing-4 border-2 border-green-500 text-white items-center justify-center  text-center rounded-full  w-6 h-6 text-xs mx-1 bg-black">{addZerro(ticketbet.bet2)}</p>
       <p key={null}  className=" flex border-spacing-4 border-2 border-green-500 text-white items-center justify-center  text-center rounded-full  w-6 h-6 text-xs mx-1 bg-black">{addZerro(ticketbet.bet3)}</p>
       <p key={null}  className=" flex border-spacing-4 border-2 border-green-500 text-white items-center justify-center  text-center rounded-full  w-6 h-6 text-xs mx-1 bg-black">{addZerro(ticketbet.bet4)}</p>
        </div>


        <div className="flex justify-between px-2 bg-red-00 ">
        <p className="text-xs md:text-sm">#{ticketbet.drawnumber}</p>
        <p className={`${ticketbet.status ==`active` ? `text-orange-500` : `${ticketbet.status ==`won` ? `text-green-500` : `${ticketbet.status ==`lost` ? `text-red-500` : `text-white`}`}`} capitalize text-xs md:text-sm`}>{ticketbet.status}</p>

        </div>

        <div className="flex px-1 pt-2 items-center justify-between ">
        <p className="text-[10px] text-gray-900 capitalize">{ticketbet.betdate}</p>
        <p className={`text-[10px] text-whitee capitalize text-orange-500 ${ticketbet.status ==`active` ? `animate-ping` : ``}`}>o</p>
        </div>
    </div>
  )
}

export default Ticket
