import React, { useEffect, useState,useReducer } from 'react';
import { onAuthStateChanged } from "firebase/auth";

import { useRouter } from 'next/router'
import { TbSend } from 'react-icons/tb';
import { AiOutlineClear } from 'react-icons/ai';

//import Router from 'next/router'


import { authentication } from "../../firebase"

import {betReducer} from "../Reducer/betReducer"


import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Navbar from '../../components/Navbar';

import Ticket from "../../components/Ticket";





const  dashboard=()=> {

 
  const [state, dispatch] = useReducer(betReducer, {
    betNumbers:[]
  })
  
  let betNumber = []

  const [numberOne, setNumberOne] = useState([1,2,3,4,5])

  const [samplestate,setSamplestate]=useState('')

  //const [betNumber, setNumber] = useState([])


  //let betNumber = [{id:1,num:1},{id:2,num:2},{id:3,num:3}]
  
  //const betNumber = [1,4]
  
  
 //console.log(state)
 //console.log(numberOne)
 console.log(samplestate)

//  const submitbet = ()=>{
  let  ticketbet={
     bet1:1,
     bet2:2,
     bet3:3,
     bet4:4,
     status:"active",
     drawnumber:123,
     betdate:"7-may-2021",
   }
//  }

  
  const SendNumber =(keyValue)=>{
    //alert(keyValue)

    //setSamplestate(keyValue)

    console.log(keyValue)




    //console.log(keyValue)

    //let somearray=[]
    

    //somearray.push(keyValue)
   

    // dispatch({
    //   type:"ADD_BETTNUMBERS",
    //   payload:keyValue,
    // })


    // setNumberOne(somearray)
   
  
      // const index = betNumber.indexOf(keyValue)

    //  index > -1
    // betNumber.includes(keyValue)
    //  if(index > -1){
    //   betNumber.splice(index,1);
      
    //    }else{
    //     betNumber.push(keyValue)
   
    //      }
        
       
      }



    const router = useRouter()

    const auth = authentication;

    const [userid, setUserid] = useState(null)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const id = user.phoneNumber
          setUserid(uid)
          // ...
        } else {

            //router.push("/")
          // User is signed out
          // ...
        }
      });
      const keyboard = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45
      ]

        const addZerro = (num)=>{
          if(num < 10){
            return `0${num}`
          }else{
            return num
          }
        }

    

  return (
      
      <div className="w-full flex items-center justify-center flex-col  h-screen bg-gray-900 px-1 md:px-2 ">

        <div className="flex flex-col w-full h-[300px]  md:w-[80%] bg-yellow-900">

            <div className="w-full h-16 bg-gray-600 items-center justify-center flex space-x-4 md:px-2">
              Live Draw

            </div>
            
            
        
        </div>

        <div className=" flex flex-col md:flex-row w-full h-[80%]  md:w-[80%] bg-green-00">

          <div className=" w-full bg-gray-900  h-[300px] md:h-full  overflow-scroll ">
            <div className="w-full h-16 bg-gray-600 items-center justify-center flex space-x-4 md:px-2 top-0 sticky ">
              Tickets
            </div>

           
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3  md:mt-2  ">

              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              <Ticket ticketbet={ticketbet}/>
              

              </div>
          </div>

          <div className=" w-full bg-green-00 ">
            <div className="w-full h-16 bg-gray-600 items-center justify-center flex space-x-4 md:px-2">

            <div className=" w-9 h-9 bg-orange-200 border-2 border-violet-500 rounded-full flex items-center justify-center hover:bg-orange-800">
                <AiOutlineClear className="w-6 h-6 text-orange-500 text-center"/>
              </div>

              <div className="flex space-x-4 px-8">
              {
                numberOne?.map((value)=>(
                <p key={value} className=" flex border-spacing-4 border-4 border-green-500 text-white items-center justify-center  text-center rounded-full  w-12 h-12 bg-black">{addZerro(value)}</p>
                ))
              }
              </div>


              
              <div className=" w-9 h-9 bg-green-200 border-2 border-violet-500 rounded-full flex items-center justify-center hover:bg-green-800">
                <TbSend className="w-6 h-6 text-green-500 text-center"/>
              </div>
            </div>

            <div className="w-full  p-4 bg-gray-00 overflow-y-hidden flex-wrap ">

              <div className="grid grid-cols-6 gap-1">  
              

              {
                  keyboard.map((keyValue)=>(

                    <div key={keyValue} onClick={()=>SendNumber(keyValue)}  className={`${betNumber?.includes(keyValue) ? `border-red-900 border-4` : `border-green-900 border-4`} w-9 h-9 rounded-full bg-gray-600 m-1 justify-center items-center flex text-gray-200 cursor-pointer hover:bg-black hover:text-white`}>{addZerro(keyValue)}</div>
                  ))

              }

              </div>
            </div>

            <hr />
                    <p className="text-white">Forcast</p>
            <div className="h-16 bg-orange-600 my-2 rounded-lg">

            </div>

          </div>

          
        </div>


  
      </div>
    
  )
}

export default dashboard

